/**
 * 上传图片
 * @param url 请求地址
 * @param data 请求参数
 */
function uploadPhoto(url,datas) {
    $.ajax({
        type:"POST",
        url:url,
        dataType:"json",
        cache:false,
        processData: false,
        contentType:false,
        data: datas,
        success:function (data) {
            return data;
        }
    });
}

/**
 * 修改/添加 用户信息
 * @param url 请求地址
 * @param datas 请求参数
 * 如果想要得到函数的返回值，需要把 Ajax 改为同步的 async:false
 */
function uploadInfo(url,datas) {
    $.ajax({
        type: "POST",
        url:url,
        dataType:"json",
        //async:false, //同步
        contentType: "application/json; charset=UTF-8",
        data:datas,
        success:function (data) {
            if (data.code == 0){
               alert(data.msg);
            }else {
               alert(data.msg);
            }
        }
    });
}