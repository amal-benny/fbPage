$(document).ready(function(){
    $("#signup").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6,
            },
            day:{
                required:true,

            },
            gender:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            Cpassword:{
                required:true,
                minlength:6,
            }

        },
        messages:{
            fname:{
                required: "This field is required",
                minlength:"Enter atleast 4 characters",
                maxlength:"The maximum length is 6 characters"
            },
            sname:"This field is required",
            email:"Enter a valid email "

        }
       
    })
})