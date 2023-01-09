let picture = document.getElementById('image1')

picture.addEventListener('mouseover', function()
{
    picture.style.border='3px solid Red';
})

picture.addEventListener('mouseleave', function()
{
    picture.style = null
});