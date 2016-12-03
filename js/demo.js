angular.module("myApp",[])
.controller("myController",["$scope",function($scope){
    var search=[
        {
            firstname:"fang",
            lastname:"vane",
            gender:"male",
            salary:"12333.50",
            birthday:"2007-07-11"
        },
        {
            firstname:"sara",
            lastname:"rose",
            gender:"female",
            salary:"45655.2",
            birthday:"1997-02-03"
        },
        {
            firstname:"aam",
            lastname:"hot",
            gender:"male",
            salary:"668805.9",
            birthday:"1986-03-04"
        },
        {
            firstname:"mark",
            lastname:"bear",
            gender:"male",
            salary:"98455.50",
            birthday:"1968-03-22"
        }

    ];

    $scope.search=search;
    $scope.TextSearch="";
    $scope.TextSearch2="";
    $scope.col = 'firstname';
    $scope.desc = 0;
    $scope.searchs=function(obj){
        if($scope.TextSearch!=""){
            if(obj.firstname.toLowerCase().indexOf($scope.TextSearch.toLowerCase())!=-1){
                return true;
            }else{
                return false;
            }
        }else if($scope.TextSearch2!=""){
            if(obj.lastname.toLowerCase().indexOf($scope.TextSearch2.toLowerCase())!=-1){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
    /*$scope.data=function(){
        alert(1)
    }*/
}])