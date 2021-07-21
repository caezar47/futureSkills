
var pelk = function($){

    var _p = '.pelk__';

    function createFormData(inputs, file, data = false) {
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        if(data == false){
            var data = new FormData;
            if (file) {
                for (var j = 0; j < file.length; j++) {
                    for (var k = 0; ; k++) {
                        if (file.prop('files')[k]) {
                            data.append('file[' + j + '][' + k + ']', file.prop('files')[k]);
                        } else {
                            break;
                        }
                    }
                }
            }
            for (var i = 0; i < inputs.length; i++) {
                if(inputs.eq(i).attr('type') != 'radio') {
                    if (inputs.eq(i).val() != "") {
                        data.append(inputs.eq(i).attr('name'), String(inputs.eq(i).val()).replace(rtrim,''));
                    }
                }else{

                    if(inputs.eq(i).is(":checked")){
                        data.append(inputs.eq(i).attr('name'), String(inputs.eq(i).val()).replace(rtrim,''));
                    }
                }
            }
            return data;
        }else{
            for (var i = 0; i < inputs.length; i++) {

                if(inputs.eq(i).attr('type') != 'radio') {
                    if (inputs.eq(i).val() != "") {
                        data.append(inputs.eq(i).attr('name'), inputs.eq(i).val());
                    }
                }else{

                    if(inputs.eq(i).is(":checked")){
                        data.append(inputs.eq(i).attr('name'), inputs.eq(i).val());
                    }
                }
            }
            return data;
        }

    }

    function sendInfo(selector = {},dataArr = {},method,callback){

        if(JSON.stringify(selector) !== "{}"){
            var data = createFormData($(selector));
            data.append('method',method);
            var processData = false;
            var contentType = false;

        }else{
            var data = dataArr;
            data.method = method;
            var processData = true;
            var contentType = 'application/x-www-form-urlencoded';
        }
        $.ajax({
            url: '/api',
            method:"POST",
            processData:processData,
            contentType:contentType,
            data:data,
            success:function(resp){
                callback(resp);
            },
            error:function(err){
            },
            complete:function (data) {
                //console.log(data.responseText);
            }
        });

    }


    var sectionsOfPieces = function(){
        var map = $('.map-svg__svg-inner');
        var items = map.attr('data-items');
        items = JSON.parse(items);

        if(items != void(0)) {

            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var path = map.find('path[data-id=' + item['id'] + ']');
                
                path.css(JSON.parse(item['style']));
                
                path.attr('data-value', JSON.stringify(item));
                //console.log(item);
            }
        }
        var pathes = map.find('path');

        pathes.on('click',function(e){
            var elem = $(this);
            var value = elem.attr('data-value');
            
            if(value && value!= ""){
            value = JSON.parse(value);
                showSpecifications(value);
            }
        });

        function showSpecifications(data){
            console.log(data);
            $('.js-box-data').css({'display':'block'});
            var area = data['area'];
            var arrangement = (data['arrangement'] != 0) ? data['arrangement'] : false;
            var land =  (data['land'] != 0) ? data['land'] : false;
            var id =  (data['id']) ? data['id'] : false;
            var ID =  (data['ID']) ? data['ID'] : false;
            var sotka =  (data['sotka'] != 0) ? data['sotka'] : false;
            var special =  (data['special'].trim().length != 0) ? data['special'] : false;
            var status =  (data['status'] != 0) ? data['status'] : false;
            var cadastral_number = (data['cadastral_number'] != 0) ? data['cadastral_number'] : false;

            var full = (land  && arrangement) ? parseInt(land) + parseInt(arrangement) : false;

            $(`.js-id`).html(id);
            specification('.js-val-area',area);
            specification('.js-val-status',status);
            specification('.js-val-sotka',sotka);
            specification('.js-val-land',land);
            specification('.js-val-arr',arrangement);
            specification('.js-val-cadastral_number',cadastral_number);
            specification('.js-val-full',full);


            //if(cadastral_number){
               // $('.js-val-cadastral_number').html(cadastral_number);
               // }else{
               //     $('.js-val-cadastral_number').css({'display':'none'});
               //  }

            if(status != "Свободен") {
                $(`${_p}link-get_land`).attr('href','javascript:void(0)');
                $(`${_p}link-get_land`).css({'display':'none'});
            }else{
                var link = `${window.location.origin}${window.location.pathname}?building=order&apart_id=${ID}`;
                $(`${_p}link-get_land`).css({'display':'block'});
                $(`${_p}link-get_land`).attr('href',link);
            }

            if(special){
                $('.js-val-special').html(special);
            }else{
                $('.js-val-special').css({'display':'none'});
            }

        }

        function specification(clsContainer,value){
            if(!value){
                $(clsContainer).css({'display':'none'});
                $(clsContainer).find('.js-val').html('');
            }else{
                $(clsContainer).css({'display':'block'});
                $(clsContainer).find('.js-val').html(value);
            }
        }

    }()

    $(`${_p}btn-add_to_compare`).on('click',function(e){
        var body__classes = document.body.classList.value;
        var regexp = /term-([\d]+)/;
        var matches = regexp.exec(body__classes)[1];

        new Azbn7__API__Request({
            method:"add_to_compare",
            submethod:"put",
            term:matches,
        },function (response) {
            if(response.response){
                var counter = $('.azbn__compare-counter');
                $('.pelk__btn-add_to_compare--container').fadeOut();
                $('a.navbar__compare').addClass('is--add');
                setTimeout(function(){
                    $('a.navbar__compare').removeClass('is--add');
                },5000);
                counter.html(parseInt(counter.html())+1);
            }

        });
    });

    $(`${_p}btn-remove_to_compare`).on('click',function(){
        var term = $(this).attr('data-remid');
        new Azbn7__API__Request({
            method: "add_to_compare",
            submethod: "delete",
            term: term,
        }, function (response) {
            if (response.response) {
                window.location.href = window.location.href;
            }

        });
    });


    var timeoutId = null;

    function getVillageItem(data){
        var itemTemplate = '<div class="grid__cols">\n' +
            '\t\t\t\t\t\t<div class="card-item__card  is--objacts-card    ">\t\n' +
            '\t\t\t\t\t\t\t<a href="'+ data.link +'" class="card-item__preview  is--objacts-card">\t\n' +
            '\t\t\t\t\t\t\t\t<img src="'+ data.preview +'" alt="'+ data.name +'" class="img-responsive">\n' +
            '\t\t\t\t\t\t\t\t<div class="card-item__bg  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t<div class="card-item__bg-inner  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem-group  is--desc  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--sale  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--sale-num  is--objacts-card">'+ data.free_lands_count +'</div> <span>Свободных участков</span>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--place  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t'+ data.direction +'\n' +
            '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--distance  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--label  is--objacts-card">От МКАД:</div>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t<span>'+ data.distance +' км</span>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--btn  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t<div class="btn-link__item  is--white  is--objacts-card">\n' +
            '\t\t\t\t\t\t\t\t\t\t\t\t<span class="btn-link__name  is--white">Подробнее</span>\n' +
            '\t\t\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t\t\t</a>\n' +
            '\t\t\t\t\t\t\t<h5 class="card-item__heading  is--objacts-card"><a href="'+ data.link +'">'+ data.name +'</a></h5>\n' +
            '\t\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t</div>';
        return itemTemplate;
    }


    $(`${_p}form__filter-item`).change(function () {
        $(`${_p}village_filter-elem_cont`).css({'display':'block'});
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function(){
            sendInfo(`${_p}form__filter-item`,{},'village_filter',function(response){
                $(`${_p}village_filter-container`).empty();
                var items = response.response;
                if(items.length){
                    for(var i = 0; i < items.length; i++){
                        var item = items[i];
                        $(`${_p}village_filter-container`).append(getVillageItem(item));
                    }
                }
            });
        },200)

    });



    var pelk__house_filter = function(){

        var _fp = `${_p}house-filter`;

        $(_fp).change(function(e){
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function(){
                sendRequest();
            },200);
        });

        $(`${_fp}-typycal`).change(function(e){
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function(){
                sendRequestTypical();
            },200);
        });

        function getHouseItem(obj){

            var materials;
            switch(obj.meta.material){
                case 'cip':
                    materials = 'СИП-панели';
                    break;
                case 'block':
                    materials = 'Пеноблок';
                    break;
                case 'brick':
                    materials = 'Кирпич';
                    break;
            }

            var garage = (obj.meta.garage == 1) ? "Есть" : "Нет";

            return '<div class="grid__cols  is--house pelk__house-filter__item">\n' +
                '\t\t\t\t\t\t<label for="'+ obj.ID +'" class="card-item__card  is--form-order-house">\n' +
                '\t\t\t\t\t\t\t<input class="card-item__input pelk__house-filter__item-input is--form-order-house" type="radio" name="fo[house]" id="'+ obj.ID +'"   value=\''+ JSON.stringify(obj) +'\'>\n' +
                '\t\t\t\t\t\t\t<div class="card-item__inner  is--form-order-house">\n' +
                '\t\t\t\t\t\t\t\t<div class="card-item__preview  is--form-order-house">\n' +
                '\t\t\t\t\t\t\t\t\t<img src="'+ obj.img +'" class="img-responsive" alt="">\t\n' +
                '\t\t\t\t\t\t\t\t</div>\t\n' +
                '\t\t\t\t\t\t\t\t<div class="card-item__elem-group  is--form-order-house">\n' +
                '\t\t\t\t\t\t\t\t\t<div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="card-item__heading  is--form-order-house">\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t  '+ obj.post_title +' \n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--form-order-house">\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i>Материал:</i> <span>'+ materials +'</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--form-order-house">\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i>Этажей:</i> <span>'+ obj.meta.floor +'</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--form-order-house">\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i>Общая Площадь:</i> <span>'+ obj.meta.area_total+' м<sup>2</sup></span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--form-order-house">\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i>Жилых комнат:</i> <span>'+ obj.meta.rooms +'</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="card-item__elem  is--form-order-house">\t\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<i>Гараж:</i> <span>'+ garage +'</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="card-item__cost  is--form-order-house">\t\n' +
                '\t\t\t\t\t\t\t\t\t\tот <span>'+ obj.meta.cost +' ₽</span>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t<div class="card-item__btn  is--form-order-house">\n' +
                '\t\t\t\t\t\t\t\t<a href="'+ obj.guid +'" class="btn-link__item">\n' +
                '\t\t\t\t\t\t\t\t\t<span class="btn-link__name">Подробнее</span>\n' +
                '\t\t\t\t\t\t\t\t</a>  \n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</label>\t\t\t\n' +
                '\t\t\t\t\t</div>';
        }

        function getHouseItemTypical(obj){

            var materials;
            switch(obj.meta.material){
                case 'cip':
                    materials = 'СИП-панели';
                    break;
                case 'block':
                    materials = 'Пеноблок';
                    break;
                case 'brick':
                    materials = 'Кирпич';
                    break;
            }

            return '<div class="grid__cols pelk-typical__item">\n' +
                '\t\t\t\t\t<a href="'+ obj.guid +'" class="card-item__card  is--projects-card    ">\t\n' +
                '\t<div class="card-item__preview  is--projects-card">\n' +
                '\t\t<img src="'+ obj.img +'" alt="Aviator" class="img-responsive">\n' +
                '\t</div>\n' +
                '\t<h5 class="card-item__heading  is--projects-card">'+ obj.post_title +'</h5>\n' +
                '\t<div class="card-item__bg  is--projects-card">\n' +
                '\t\t<div class="card-item__bg-inner  is--projects-card">\n' +
                '\t\t\t<div class="card-item__elem  is--projects-card">\n' +
                '\t\t\t\tОбщая площадь: <span>'+ obj.meta.area_total+' м<sup>2</sup></span>\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<div class="card-item__elem  is--projects-card">\n' +
                '\t\t\t\tЦена от: <span>'+ obj.meta.cost +' ₽</span>\n' +
                '\t\t\t</div>\n' +
                '\t\t\t<div class="card-item__elem  is--projects-card">\n' +
                '\t\t\t\tЖилых комнат: <span>'+ obj.meta.rooms +'</span>\n' +
                '\t\t\t</div>\t\t\t\n' +
                '\t\t</div>\n' +
                '\t</div>\n' +
                '</a>\n' +
                '\t\t\t\t</div>';
        }

        function prepareElems(){
            return {
                "area" : $(`${_fp}__area`).val(),
                "floor" : $(`${_fp}__floor:checked`).val(),
                "material" : $(`${_fp}__material`).val(),
            }
        }

        function sendRequest(){
            sendInfo({},prepareElems(),'house_filter',function(response){
                var data = response.response;
                $(`${_fp}__item`).remove();
                for(var i = 0; i < data.length; i++){
                    $(`${_fp}__container`).after(getHouseItem(data[i]));
                }
                calculateTotallySumm();
            });
        }


        function sendRequestTypical(){
            sendInfo({},prepareElems(),'house_filter',function(response){
                var data = response.response;
                $('.pelk-typical__item').remove();
                for(var i = 0; i < data.length; i++){
                    $(`${_fp}__container_typical`).append(getHouseItemTypical(data[i]));
                }
            })
        }

        $('.pelk__house-radio__choise').change(function(e){
           var self = $(this);
            if (self.data('type') == 1) {
                sendRequest();
                $(`${_fp}__container`).css({'display': 'block'});
            } else {
                $(`${_fp}__item`).remove();
                $(`${_fp}__container`).css({'display': 'none'});
            }
            calculateTotallySumm()
        });

        $('.pelk__area-radio__choise').change(function(e){
           var self = $(this);
           if(self.data('house') == 1){
               $(`${_fp}__item`).remove();
               $(`${_fp}__container`).css({'display': 'none'});
               $('.pelk__house-conainers').css({'display': 'block'});
           }else{
               $('.pelk__house-radio__choise').prop('checked',false);
               $(`${_fp}__item`).remove();
               $(`${_fp}__container`).css({'display': 'none'});
               $('.pelk__house-conainers').css({'display': 'none'});
           }
            calculateTotallySumm()
        });

        $(document).ready(function(){
            sendRequest();
            sendRequestTypical();
        });

        $(document).on('change',`${_fp}__item-input`,function(){
            calculateTotallySumm();
        });

        function showFooter() {

            this.__foot_cls = '.footer__pelk-animation';

            $(this.__foot_cls).removeClass('pelk__projects-order_footer');
            $(document.body).addClass('is--objacts-order-footer');

        }

        function calculateTotallySumm(){
            var pretotoalCost = $('.pre-total_cost').val();
            var additionalCost = $(`${_fp}__item`).find(`${_fp}__item-input:checked`);


            if(additionalCost.length){
                additionalCost = parseInt(JSON.parse(additionalCost.val()).meta.cost);
            }else{
                additionalCost = {meta:{
                    cost:0
                    }};
            }
            $('.totaly__summ').html(parseInt(pretotoalCost) + ((!isNaN(additionalCost)) ? additionalCost : 0));
            showFooter();
        }



    }();




    var CountingCostOfBuilding = function () {

        this.attr__name = 'data-cost';
        this.__cls = '.pelk__projects-order';
        this.__foot_cls = '.footer__pelk-animation';
        this.full_costs = 0;
        this.cost_per_metter = 0;
        this.amount__metters = 0;


        var i = setInterval(() => {
            if($(document.body).hasClass('is--objacts-order-footer')){
                $(document.body).removeClass('is--objacts-order-footer');
                clearInterval(i);
            }
        },100);


        $(this.__cls).change(() => {

            this.cost_per_metter = 0;
            this.amount__metters = 0;
            this.checkAllInputs();
            this.calculateCost();
            this.animatefooter();
        });


        this.checkAllInputs = function(){
            $(this.__cls).each((index, elem) => {
                var e = $(elem);
                var opt = e.find('option:selected');
                if(opt.length){
                    if(opt.attr(this.attr__name) != undefined){
                        this.cost_per_metter += parseInt(opt.attr(this.attr__name));
                    }
                }else{
                    if(e.attr(this.attr__name) != undefined && e.is(':checked')){
                        this.cost_per_metter += parseInt(e.attr(this.attr__name));
                    }
                    if(e.attr('type') == 'number'){
                        this.cost_per_metter += parseInt(e.attr(this.attr__name));
                        this.amount__metters = parseInt(e.val().replace(/[^0-9]/g,''));
                    }
                }
            });
        }

        this.calculateCost = function(){

            if(!isNaN(this.amount__metters)){
                this.full_costs = this.cost_per_metter * this.amount__metters;
            }else{
                this.full_costs = 0;
            }

        }

        this.animatefooter = function(){
            if(this.full_costs != 0){
                $(this.__foot_cls).removeClass('pelk__projects-order_footer');
                $(document.body).addClass('is--objacts-order-footer');
                this.showCost();
            }else{
                $(this.__foot_cls).addClass('pelk__projects-order_footer');
                $(document.body).removeClass('is--objacts-order-footer');
            }
        }

        this.showCost = function(){
            var s = '.footer__pelk-animation-cost';
            $(s).html(new Intl.NumberFormat('ru-RU').format(this.full_costs));
        }

    }();
    
    





}(jQuery);
