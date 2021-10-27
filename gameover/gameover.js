import { renderUser } from '../renderUser.js';
import { getUser } from '../storage-utils.js';

const user = getUser();
renderUser(user);
