import Post from './post.js';
import Client from './client.js';

class PaidPost extends Post {
    price;

    constructor(name, price) {
        super(name);
        this.price = price;
    }

    attach(subscriber) {
        if (subscriber instanceof Client) {
            super.attach(subscriber);
        }
    }
}

export { PaidPost };
export default PaidPost;
