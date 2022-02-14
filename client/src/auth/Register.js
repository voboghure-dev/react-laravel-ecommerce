import './register.scss';

export default function Register() {
  return (
    <div class='page-content'>
      <div class='form-v2-content'>
        <div class='form-left'>
          <img src='images/form-v2.jpg' alt='form' />
          <div class='text-1'>
            <p>
              Bring Your Music Along<span>try Unlimited</span>
            </p>
          </div>
          <div class='text-2'>
            <p>
              <span>$9.99</span>/ Month
            </p>
          </div>
        </div>
        <form class='form-detail' action='#' method='post' id='myform'>
          <h2>Registration Form</h2>
          <div class='form-row'>
            <label for='full-name'>Full Name:</label>
            <input
              type='text'
              name='full_name'
              id='full_name'
              class='input-text'
              placeholder='ex: Lindsey Wilson'
            />
          </div>
          <div class='form-row'>
            <label for='your_email'>Your Email:</label>
            <input
              type='text'
              name='your_email'
              id='your_email'
              class='input-text'
              required
              pattern='[^@]+@[^@]+.[a-zA-Z]{2,6}'
            />
          </div>
          <div class='form-row'>
            <label for='password'>Password:</label>
            <input
              type='password'
              name='password'
              id='password'
              class='input-text'
              required
            />
          </div>
          <div class='form-row'>
            <label for='comfirm-password'>Confirm Password:</label>
            <input
              type='password'
              name='confirm_password'
              id='confirm_password'
              class='input-text'
              required
            />
          </div>
          <div class='form-checkbox'>
            <label class='container'>
              <p>
                By signing up, you agree to the{' '}
                <a href='#' class='text'>
                  Play Term of Service
                </a>
              </p>
              <input type='checkbox' name='agree' id='agree' />
              <span class='checkmark'></span>
            </label>
          </div>
          <div class='form-row-last'>
            <input
              type='submit'
              name='register'
              class='register'
              value='Register'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
