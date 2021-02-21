import Swal from 'sweetalert2';

export default ({ app }, inject) => {
  inject(
    'toast',
    Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
        toast.addEventListener('click', Swal.close);
      },
    }),
  );

  inject(
    'swal',
    Swal.mixin({
      buttonsStyling: true,
    }),
  );
};
