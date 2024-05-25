class Personnel {

    constructor(id, name, birthday, gender, position, imgFile) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.position = position;
        this.imgFile = imgFile;
    }
    getID () {
        return this.id;
    }
    getName () {
        return this.name;
    }
    getBirthday () {
        return this.birthday;
    }
    getGender () {
        return this.gender;
    }
    getPosition () {
        return this.position;
    }
    getImage () {
        return this.image;
    }
    setId (id){
        this.id = id;
    }
    setName (name){
        this.name = name;
    }
    setBirthday (birthday){
        this.birthday = birthday;
    }
    setGender (gender){
        this.gender = gender;
    }
    setPosition (position){
        this.position = position;
    }
    setImage (image){
        this.image = image;
    }
    edit(id, name, birthday, gender, position, image){
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.position = position;
        this.image = image;
    }
}