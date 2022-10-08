namespace terminal {
    class t {
        write(text :any, type :string) {
            document.write("<text class=" + type + ">" + text + "</text>");
        }
        writeline(text :any, type :string) {
            document.write("<text class=" + type + ">" + text + "</text><br></br>");
        }
        clear() {
            document.body.innerHTML = "";
        }   
    }
    class s {
        bgColor(newColor :any) {
            if (newColor == null) {
                return document.body.style.backgroundColor;
            }
            else {
                document.body.style.backgroundColor = newColor;
            }
        }
        color(newColor :any) {
            if (newColor == null) {
                return document.body.style.color;
            }
            else {
                document.body.style.color = newColor;
            }
        }
    }
    export const style = new s();
    export const screen = new t();
}
