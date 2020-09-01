// console.log('test');
$( () => {
const $openBtn = $('#openModal');
const $modal = $('.modal');
const $closeBtn = $('#close');

const openModal = () => {
  $modal.css('display', 'block');
}

const closeModal = () => {
  $modal.css('display', 'none');
}

$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

});




$(()=>{
  let currentImgIndex = 0;
  const num = $('.images').children().length -1;

//next button

  $('.next').on('click', () => {
    $('.images').children().eq(currentImgIndex).hide();
    if (currentImgIndex < num) {
      currentImgIndex++
    }else{
      currentImgIndex = 0
    }
    $('.images').children().eq(currentImgIndex).show();
  })

  $('.previous').on('click', () => {
    $('.images').children().eq(currentImgIndex).hide();
    if (currentImgIndex > 0) {
      currentImgIndex--;
    }else{
      currentImgIndex = num;
    }
    $('.images').children().eq(currentImgIndex).show();
  })
})

//previous button




$(()=>{
    $('form').on('submit', (event)=>{

        event.preventDefault();
        let userInput = $('input[type="text"]').val();
        $(event.currentTarget).trigger('reset')


    // $('form').on('click', (event) =>{
    //   $(.reset-btn).reset()
    // })


	$.ajax({
            dataType: 'json',
            url:'https://api.punkapi.com/v2/beers?page=2&abv_lt=' + userInput,
            // method: 'GET'
            // data: {
            //   "$limit": 3,

        }).then(
            (data)=>{
              for(let i=0; i < 10; i++){

                // console.log(data);
                let newDiv = $('<div>').addClass('beer-list').attr('id', i)
                let newImage = $('<img>').attr('src', data[i].image_url)
                let newName = $('<li>').text('Name: ' + data[i].name).css('text-align', 'center')
                let newAbv = $('<li>').text('ABV: ' + data[i].abv).css('text-align', 'center')
                let newDescription = $('<li>').text('Description: ' +data[i].description)
                let newPairings = $('<li>').text('Food Pairings: ' +data[i].food_pairing[0])
                // $('#name').html(data.name);
                // $('#abv').html(data.abv);
                // $('#description').html(data.description);
                $('ul').append(newDiv)
                newDiv.append(newImage)
                newDiv.append(newName)
                newDiv.append(newAbv)
                newDiv.append(newDescription)
                newDiv.append(newPairings)

            }
            (error)=>{
                console.log('bad');
            }
      $('.reset-btn').click(function(){
        $('ul').find('div').remove();
        })
        // );
      })
    })
  })

// $(() =>{
//     $('reset-btn').on('click', event =>{
//       event.preventDefault()
//       $('form').trigger('reset');
//     });
//   });
