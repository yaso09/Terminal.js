namespace terminal {
    export function write(text :any, clas :string) {
        document.body.innerHTML += "<div class=" + clas + ">" + text + "</div>";
    }
    export function writeline(text :any, clas :string) {
        document.body.innerHTML += "<div class=" + clas + ">" + text + "</div><br></br>"; 
    }
    export function clear() {
        document.body.innerHTML;
    }
}

