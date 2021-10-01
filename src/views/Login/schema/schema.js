import {
    required
} from '../validation/index';

export const loginFields = [{
            name: 'username',
            type: 'text',
            value: null,
            placeholder: 'Usernamr',
            label: 'Username',
            rules: [required],
        },
        {
            name: 'password',
            type: 'password',
            value: null,
            placeholder: 'Password',
            label: 'Password',
            rules: [required],
        }
    ]