$.getJSON('/data/cameralazada.json', function(data){
    let menu = data.menu;
    $.each(menu, function(i, data){
        $('#daftar-lazada').append('<div class="col-md-3"><div class="card mb-3"><img src="'+ data.Gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.Nama +'</h5><h5 class="card-title">'+ data.Harga +'</h5><h5 class="card-title">'+ data.lokasi +'</h5><a href="'+ data.Link +'" class="btn btn-primary">Deskripsi</a></div></div></div>');
    });
});




$.getJSON('/data/kameraTERLARISshopee.json', function(hasil){
    let search = hasil.search;
    let content = '';

    $.each(search, function(i, hasil){
            content += '<div class="col-md-3"><div class="card mb-3 "><img src="'+ hasil.Gambar +'" class="card-img-top"><div class="card-body"><h6 class="card-title overflow-hidden">'+ hasil.Nama +'</h6><h6 class="card-title">'+ hasil.Harga +'</h6><h6 class="card-title">'+ hasil.Terjual +'</h6><h5 class="card-title">'+ hasil.Lokasi +'</h5><a href="'+ hasil.Link +'" class="btn btn-primary">Details</a></div></div></div>';
    });
    $('#daftar-shopee').html(content);
});