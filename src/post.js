class Post {
    name;
    #number = 0;
    #subscribers = [];

    constructor(name) {
        this.name = name;
    }

    get summary() {
        return `${this.name} publication number ${this.#number}`;
    }

    getSubscribers() {
        return this.#subscribers.map(subscriber => subscriber.name).join(',');
    }

    attach(subscriber) {
        if (!this.#subscribers.includes(subscriber)) {
            this.#subscribers.push(subscriber);
        }
    }

    detach(subscriber) {
        this.#subscribers = this.#subscribers.filter(item => item !== subscriber);
    }

    publish() {
        this.#number++;
        return this.#subscribers.map(subscriber => subscriber.notify(this));
    }
}

export { Post };
export default Post;
