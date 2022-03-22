import swal from 'sweetalert';


function Success() {
    return(
      
            // swal("Order Place Successfully", "Thanks for visiting", "success")
            swal({
                title: "Order Place Successfully!",
                text: "Thanks for visiting!",
                type: "success",
               
            }).then(function() {
                window.location = "/fooditems";
            })
    )
}
export default Success;