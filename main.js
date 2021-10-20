var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F485%2F292%2Fnon_2x%2Fgrandmother-cartoon-design-free-vector.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F2485292-grandmother-cartoon-vector-design&tbnid=f-q6xvrcl4GpcM&vet=12ahUKEwiDmbupitnzAhXHnUsFHV1NDv0QMygIegUIARDzAQ..i&docid=2voO-SvBCYT3RM&w=980&h=980&q=grandmother%20cartoon&ved=2ahUKEwiDmbupitnzAhXHnUsFHV1NDv0QMygIegUIARDzAQ", "https://i.postimg.cc/L4jJtNNr/TPhoto-00094.jpg" , "https://i.postimg.cc/1tCJJym3/IMG-suhu3.jpg", "Lhttps://i.postimg.cc/wT6D3CgW/IMG-suru2.jpg", "https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6" , "https://i.postimg.cc/tTqV7PHs/Bharath.jpg"];
var names = ["My Family Book","Jayama C", "Me", "Suhani B.K", "Surabhi B.K", "Ashwini M.N", "Bharath Kumar C"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
