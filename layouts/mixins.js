export default {
  methods: {
    catchErrors(e) {
      console.log({ e });
      const { response } = e;
      if (!response)
        return `There is a network issue. Please check your internet connection and try again`;

      const message = response.data;
      if (message.includes('not valid')) return this.sessionExpired();

      if (response.status === 404) return null;

      return message.replace(/data:/g, '') || 'An error occured!';
    },

    numberWithCommas: x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    removeCommas: amount => amount.replace(/,/g, ''),
    capitalize: string => string.charAt(0).toUpperCase() + string.slice(1),
    validateEmail: email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),

    sessionExpired() {
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      window.location.href = '/login';

      const text = 'Please login again to continue using Kovatek';
      this.showNotification('warning', text, 'Session Expired!');
    },
    logout(type) {
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      window.location.href = 'https://beta.kovatek.com';

      if (type) this.showToast('Expecting you soon!');
    },
  },
};
