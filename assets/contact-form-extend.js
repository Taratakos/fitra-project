document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('ContactFormExtend');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      console.log('Form submitted!');
      console.log(form);

      // I-variant
      // const email = form.querySelector('input[name="contact[email]"]').value;
      // const body = form.querySelector('input[name="contact[body]"]').value;
      // console.log('Email:', email);
      // console.log('Body:', body);


      const formData = new FormData(form);
      console.log(formData);

      // II-variant
      // for (const [name, value] of formData.entries()) {
      //   console.log(name, value);
      // }

      // III-variant (individual acces fields by name )
      const email = formData.get("contact[email]");
      const body = formData.get('contact[body]');
      const requestType = formData.get('contact[request_type]');
      const contMethod = formData.get('contact[contact_method]')

      console.log('Email', email);
      console.log('Body', body);
      console.log('Req Type', requestType);
      console.log('Cont Method', contMethod);

      /// fetch
      const searchParams = new URLSearchParams(formData);
      const url = `/contact?${searchParams.toString()}#ContactFormExtend`;
      const options = {
        method: 'POST',
        // headers: {
        // "content-type": "application/json"
        // },
        // body: new URLSearchParams(formData)
      };

      const fetchRequestOpts = {
        method: 'POST',
        headers: {
          Accept: 'application/javascript',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: formData
      };

      fetch('/contact', fetchRequestOpts)
        .then(response => {
          console.log(response);
          if (!response.ok) {
            throw new Error('Network respons was NOK')
          }
          // return response.json();
        })

      /// fetch request
      // fetch(url, options)
      //   .then(response => {
      //     if (!response.ok) {
      //       throw new Error('Network respons was NOK')
      //     }
      //     return response.json();
      //   })
      //   .then(data => {
      //     console.log('Response:', data);
      //   })
    });

  }
})

