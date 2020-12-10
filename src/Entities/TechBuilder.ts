import NODE from '../Assets/node.jpg';
import PHP from '../Assets/php.png';
import REACT from '../Assets/react.png';
import SPRING from '../Assets/spring.png';
import ANGULAR from '../Assets/angular.png';
import VUE from '../Assets/vue.png';
import CS from '../Assets/cs.png';
import PYTHON from '../Assets/python.png';
import SWIFT from '../Assets/swift.png';
import TYPESCRIPT from '../Assets/typescript.png';
import RUBY from '../Assets/ruby.png';
import ELIXIR from '../Assets/elixir.png'

import Tech from './Tech';

export default class TechBuider {
  public static SPRING = new Tech('Spring', SPRING);
  public static REACT = new Tech('React', REACT);
  public static NODE = new Tech('Node.js', NODE);
  public static PHP = new Tech('PHP', PHP);
  public static ANGULAR = new Tech('Angular', ANGULAR);
  public static VUE = new Tech('Vue.js', VUE);
  public static CS = new Tech('.NET CORE', CS);
  public static PYTHON = new Tech('Python', PYTHON);
  public static SWIFT = new Tech('Swift', SWIFT);
  public static TYPESCRIPT = new Tech('Typescript', TYPESCRIPT);
  public static RUBY = new Tech('Ruby', RUBY);
  public static ELIXIR = new Tech('Elixir', ELIXIR);

  public static buildRandomicTech() {
    const techs = {
      1: this.SPRING,
      2: this.REACT,
      3: this.NODE,
      4: this.PHP,
      5: this.ANGULAR,
      6: this.VUE,
      7: this.CS,
      8: this.PYTHON,
      9: this.SWIFT,
      10: this.TYPESCRIPT,
      11: this.RUBY,
      12: this.ELIXIR
    } as { [key: number]: Tech };

    const min = 1;
    const max = 12;

    const randomicNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return techs[randomicNumber];
  }
}