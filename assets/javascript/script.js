$('#bar').on('click',function(){
    let data = $("#navbar").data('value')
    let classes = $("#navbar").attr('class');
    $('#navbar').attr('class',data)
    $('#navbar').data('value',classes)
})