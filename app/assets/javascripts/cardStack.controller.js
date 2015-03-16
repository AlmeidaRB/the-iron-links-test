(function () {
    "use strict";
    angular.module('cardStackUI')
      .controller('CardController', function (CardService) {

        var cardCtrl = this;

        CardService.getCards().success(function(data){
          cardCtrl.stack = data;
          console.log(data);

        })
        .error(function(){
          console.log('cardCtrl.stack error')
        });

        // this.stack = [
        //   {
        //     name:'Adam',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Adamson',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Adan',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Adrian',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Adams',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Adriana',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Amanda',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Abominable',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Anastasia',
        //     title:'this is a title'
        //   },
        //   {
        //     name:'Allison',
        //     title:'this is a title'
        //   }
        // ]
      });
})();
