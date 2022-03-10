import LinkedList from "../LinkedList/LinkedList";

export default class HashTable{
    constructor(size = 32){
        this.buckets = this.initBuckets(size);
        this._entries = 0;
        this.loadFactor = 0;
    }
    initBuckets(size){
        const buckets = [];
        for(let i = 0; i < size; i++){
            buckets.push(new LinkedList());
        }
        return buckets;
    }
    hash(key = ""){
        if( typeof key !== "string") throw new Error("Key argument has to be a string");

        let accumulator = 0;
        for(let i = 0; i < key.length; i++){
            accumulator += key.charCodeAt(i);
        }
        return accumulator % this.buckets.length;
    }
    set(key, value){
        const hash = this.hash(key);
        const bucket = this.buckets[hash];
        const bucketEntryWithKey = bucket.find(entry => entry.key === key);

        if(bucketEntryWithKey){
            bucketEntryWithKey.value = value;
            return;
        }
        bucket.append({key, value});
        this._entries++;
        this.loadFactor = this._entries / this.buckets.length;
        if(this.loadFactor >= HashTable.maxLoadFactor){
            this.rehash();
        }
    }
    get(key){
        const hash = this.hash(key);
        const bucket = this.buckets[hash];
        const bucketEntryWithKey = bucket.find(entry => entry.key === key);

        if(bucketEntryWithKey) return bucketEntryWithKey.value.value;
        return undefined;
    }
    remove(key){
        const hash = this.hash(key);
        const bucket = this.buckets[hash];
        const bucketEntryWithKey = bucket.find(entry => entry.key === key);
        if(!!bucketEntryWithKey){
            bucket.delete(bucketEntryWithKey.value);
            return bucketEntryWithKey;
        }
        return null;
    }
    rehash(){
        const oldBuckets = this.buckets;
        this.buckets = this.initBuckets(this.buckets.length * 2);
        this._entries = 0;
        this.loadFactor = 0;
        oldBuckets.forEach(bucket => {
            bucket.forEach(element => {
                this.set(element.key, element.value);
            });
        });
    }
    static maxLoadFactor = 0.75;
}