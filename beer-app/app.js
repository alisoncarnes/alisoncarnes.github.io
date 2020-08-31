// console.log('test');

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
            url:'https://api.punkapi.com/v2/beers?10&abv_gt=' + userInput,
            method: 'GET'
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

                // $('#name').html(data.name);
                // $('#abv').html(data.abv);
                // $('#description').html(data.description);
                $('ul').append(newDiv)
                newDiv.append(newImage)
                newDiv.append(newName)
                newDiv.append(newAbv)
                newDiv.append(newDescription)

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