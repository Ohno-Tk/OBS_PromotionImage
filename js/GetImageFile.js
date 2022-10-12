$(window).on('load', function()
{
  $.ajax(
    {
      url:'imagelist.txt',

      // 成功時
      success: function(data)
      {
        // データ区切り(LF、CRLF、CR)
        var data_array = data.split(/\r\n|\r|\n/);
        var img;
        var divElement = document.getElementById('qqq');

        // 先頭が空白以外の場合
        if (data_array[0] != '')
        {
          for (var i = 0; i < data_array.length; i++)
          {
            // 子要素に追加
            img = document.createElement('img');
            img.src = "image/" + data_array[i];
            divElement.appendChild(img);
          }
        }

        // slickの破棄
        $('.slider').slick('unslick');

        // スライダー初期化
        sliderInit();
      }
    });
});

// スライダー初期化
function sliderInit(){
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。
    speed:1000,//スライドの動きのスピード。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: false,//左右の矢印あり
    dots: true, // ドットナビゲーションを表示する
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });
}