import Home from './components/Home.vue';
import Contacto from './components/Contacto.vue';
import NoEncontrado from './components/NoEncontrado.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import Nosotros from './components/Nosotros.vue';
import Recuperar from './components/Recuperar.vue';
import Clases from './components/Clases.vue';
import Reproductor from './components/Reproductor.vue';
import { store } from './store';

export const routes = [
    {
        path: '/', 
        component: Home, 
        meta: {
            title: 'Inicio | Lerny.co',
            metaTags: [{
                    name: 'description',
                    content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/login',
        component: Login, 
        meta: {
            title: 'Inicia Sesión | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/signup', 
        component: Signup, 
        meta: {
            title: 'Regístrate | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/nosotros', 
        component: Nosotros, 
        meta: {
            title: 'Nosotros | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/recuperar', 
        component: Recuperar, 
        meta: {
            title: 'Recuperar Cuenta | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/clases', 
        component: Clases, 
        meta: {
            title: 'Clases | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/reproductor', 
        component: Reproductor, 
        meta: {
            title: 'Curso | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
    {
        path: '/contacto', component: Contacto, 
        meta: {
            title: 'Contacto | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
        // Guard Globales para bloquear esta ruta
        beforeEnter: ((to, from, next) =>{
            console.log('Acceso a Contacto');
            next(store.state.auth);
        }),
    },
    {
        path: '*', 
        component: NoEncontrado,
        meta: {
            title: 'Pagina Error | Lerny.co',
            metaTags: [{
                name: 'description',
                content: 'The about page of our example app.'
                },
                { 
                    property: 'og:description',
                    content: 'The about page of our example app.'
                }
            ]
        },
    },
];