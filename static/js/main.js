document.addEventListener("DOMContentLoaded", function() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    didOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });

  Swal.fire({
    title: "Are you sure you want to delete this?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No"
  }).then(result => {
    if (result.isConfirmed) {
      Toast.fire({
        customClass: "toast-success",
        icon: "error",
        title: "Content Added"
      });
      return;
    }

    Toast.fire({
      customClass: "toast-danger",
      icon: "error",
      title: "Content deleted"
    });
  });
});
