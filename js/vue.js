const app = new Vue({
    el: "#app",
    data: {
        view: 'home',
    },
    components: {
        home: {
            data: function () {
                return {
                    banner: './Images/Banner.png',
                    mensaje: "Bienvenidos!",
                    datos: [
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/BODEGONES/IB01.jpg",
                            genero: "Bodegón",
                            estilo: "Impresionista",
                            autor: "Ernesto de la Cárcova"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/BODEGONES/IB02.jpg",
                            genero: "Bodegón",
                            estilo: "Impresionista",
                            autor: "Ernesto de la Cárcova"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/BODEGONES/IB03.jpg",
                            genero: "Bodegón",
                            estilo: "Impresionista",
                            autor: "Roberto Azzoni"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/BODEGONES/IB04.jpg",
                            genero: "Bodegón",
                            estilo: "Impresionista",
                            autor: "Fortunato Lacámera"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/BODEGONES/IB05.jpg",
                            genero: "Bodegón",
                            estilo: "Impresionista",
                            autor: "Ernesto de la Cárcova"

                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/PAISAJES/IP01.jpg",
                            genero: "Paisaje",
                            estilo: "Impresionista",
                            autor: "Martin Malharro"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/PAISAJES/IP02.jpg",
                            genero: "Paisaje",
                            estilo: "Impresionista",
                            autor: "Angel Domingo Vena"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/PAISAJES/IP03.jpg",
                            genero: "Paisaje",
                            estilo: "Impresionista",
                            autor: "Jose Américo Malanca"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/PAISAJES/IP04.jpg",
                            genero: "Paisaje",
                            estilo: "Impresionista",
                            autor: "Carlos Ripamonte"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/PAISAJES/IP05.jpg",
                            genero: "Paisaje",
                            estilo: "Impresionista",
                            autor: "Eduardo Sívori"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/RETRATOS/IR01.jpg",
                            genero: "Retrato",
                            estilo: "Impresionista",
                            autor: "Faustino Brughetti"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/RETRATOS/IR02.png",
                            genero: "Retrato",
                            estilo: "Impresionista",
                            autor: "Fernando Fader"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/RETRATOS/IR03.png",
                            genero: "Retrato",
                            estilo: "Impresionista",
                            autor: "Alfredo Lazzari"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/RETRATOS/IR04.jpg",
                            genero: "Retrato",
                            estilo: "Impresionista",
                            autor: "Walter de Navazio"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/IMPRESIONISMO/RETRATOS/IR05.jpg",
                            genero: "Retrato",
                            estilo: "Impresionista",
                            autor: "Eduardo Sívori"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/RETRATOS/PR01.jpg",
                            genero: "Retrato",
                            estilo: "Postimpresionista",
                            autor: "Emilio Caraffa"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/RETRATOS/PR02.png",
                            genero: "Retrato",
                            estilo: "Postimpresionista",
                            autor: "Pio Collivadino"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/RETRATOS/PR03.webp",
                            genero: "Retrato",
                            estilo: "Postimpresionista",
                            autor: "Emilio Caraffa"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/RETRATOS/PR04.png",
                            genero: "Retrato",
                            estilo: "Postimpresionista",
                            autor: "Cesáreo Bernaldo de Quirós"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/RETRATOS/PR05.png",
                            genero: "Retrato",
                            estilo: "Postimpresionista",
                            autor: "Cesáreo Bernaldo de Quirós"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/BODEGONES/PB01.jpg",
                            genero: "Bodegón",
                            estilo: "Postimpresionista",
                            autor: "Cesáreo Bernaldo de Quirós"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/BODEGONES/PB02.jpg",
                            genero: "Bodegón",
                            estilo: "Postimpresionista",
                            autor: "Carlos Gualberto Giambigi"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/BODEGONES/PB03.jpg",
                            genero: "Bodegón",
                            estilo: "Postimpresionista",
                            autor: "Miguel Carlos Victorica"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/BODEGONES/PB04.png",
                            genero: "Bodegón",
                            estilo: "Postimpresionista",
                            autor: "Miguel Carlos Victorica"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/BODEGONES/PB05.png",
                            genero: "Bodegón",
                            estilo: "Postimpresionista",
                            autor: "Miguel Carlos Victorica"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/PAISAJES/PP01.jpg",
                            genero: "Paisaje",
                            estilo: "Postimpresionista",
                            autor: "Walter de Navazio"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/PAISAJES/PP02.jpg",
                            genero: "Paisaje",
                            estilo: "Postimpresionista",
                            autor: "Carlos Gualberto Giambigi"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/PAISAJES/PP03.jpg",
                            genero: "Paisaje",
                            estilo: "Postimpresionista",
                            autor: "Fernando Fader"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/PAISAJES/PP04.jpg",
                            genero: "Paisaje",
                            estilo: "Postimpresionista",
                            autor: "Alfredo Lazzari"
                        },
                        {
                            src: "./Images/PINTORES ARGENTINOS/POSTIMPRESIONISMO/PAISAJES/PP05.jpg",
                            genero: "Paisaje",
                            estilo: "Postimpresionista",
                            autor: "Martin Malharro"
                        }
                    ],
                    filtro: [],
                    show: false,
                }
            },
            template: `
            <div>
                <div id="banner">
                    <img :src="banner">
                    <p>{{mensaje}}</p>
                </div>
                <nav id="menu">
                    <a class="menu" @click='filtrar("Bodegón")'>Bodegónes</a>
                    <a class="menu" @click='filtrar("Paisaje")'>Paisajes</a>
                    <a class="menu" @click='filtrar("Retrato")'>Retratos</a>
                    <a class="menu" @click='filtro = datos'>Catálogo completo</a>
                </nav>
                <div id="menuDesplegable">
                    <p>Género<p>
                    <i class="fa-solid fa-bars  fa-2xl" @click="show = !show"></i>
                    <nav v-if="show">
                        <a class="menu" @click='filtrar("Bodegón")'>Bodegónes</a>
                        <a class="menu" @click='filtrar("Paisaje")'>Paisajes</a>
                        <a class="menu" @click='filtrar("Retrato")'>Retratos</a>
                        <a class="menu" @click='filtro = datos'>Catálogo completo</a>
                    </nav>
                </div>
                <div id="contenedor">
                    <div class="tarjeta" v-for="dato in filtro">
                        <a :href="dato.src" target="_blank"><img :src="dato.src" alt="Una obra de arte"></a>
                        <p><b>Artista:</b> {{dato.autor}}</p>
                    </div>
                </div>
                <a href="#app">Back to Top</a>
            </div>
             `,
            created() {
                this.filtro = (this.datos).sort(function() { return Math.random() - 0.5 });
            },
            methods: {
                filtrar(parametro) {
                    this.filtro = (this.datos.filter(elemento => elemento.genero == parametro)).sort(function() { return Math.random() - 0.5 });
                }
            }
        },
        contacto: {
            data: function () {
                return {
                    url: './Images/imgContacto.png',
                    valido: true
                }
            },
            template: `
            <div id="contacto">
                <div id="formulario">
                    <h1 >Contacto</h1>
                    <form name="validar" onsubmit="submitForm(event)">
                        <i class="fa-solid fa-user"></i><label for="nombre">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre aqui..."><br><br>
                        <i class="fa-solid fa-location-dot"></i><label for="ciudad">Ciudad:</label>
                        <input type="text" name="ciudad" id="ciudad" value="CABA"><br><br>
                        <i class="fa-solid fa-envelope"></i><label for="correo">Correo electronico:</label>
                        <input type="email" name="correo" id="correo" placeholder="correo@gmail.com" ><br><br>
                        <textarea name="texto" id="" cols="30" rows="10" placeholder="Escriba aqui..."></textarea><br><br>
                        <input type="submit" value="Enviar">
                        <input type="reset" Value="Restablecer">
                    </form>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210117.8485568972!2d-68.46495091083708!3d-34.627130891920125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967907fdb13d06a7%3A0xe0fb2796d473309d!2sSan%20Rafael%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1652577924468!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <h2>Redes sociales</h2>
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                    <i class="fa-brands fa-github fa-2xl"></i>
                </div>
            </div>
            `
        },
        sobreNosotros: {
            data: function () {
                return {
                    url: './Images/imgNosotros.png',
                }
            },
            template: `
            <div id="sobreNosotros">
                <div>
                    <h1 >Sobre Nosotros</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quae dolore nisi perspiciatis nesciunt deserunt suscipit iste dignissimos velit qui aperiam placeat, eveniet obcaecati quos ad maiores dolorum officia. Beatae.</p>
                    <p>Laudantium ea vero voluptatum consectetur neque, est magnam repellat debitis? Ex itaque aspernatur exercitationem aperiam commodi, deleniti, possimus, non voluptates nemo neque consequuntur ipsam fugiat deserunt dignissimos soluta molestiae dolorem.</p>
                    <p>Accusamus iste repellat itaque explicabo, accusantium maiores aliquam harum, quidem hic sunt architecto ducimus magni? Cum facilis sit laboriosam culpa. Eaque impedit velit odio dignissimos ipsa tempore quas deleniti sint.</p>
                </div>
                <img :src="url" id="imgNosotros">
            </div>
            `
        }
    }
})
