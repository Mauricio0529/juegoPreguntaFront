import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    /* esta clase se genero manualmente.
    Al momento de realizar una peticion HTTP se agregara el token en la cabecera (headers) de la peticion
    */
    
    // Declarar variables
    constructor(private loginService: LoginService) { }

    // añadir el token
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        // guardamos la peticion
        let authRequest = req;

        // guardamos y obtenemos el token por medio de la capa de service
        const token = this.loginService.getToken();
        
        // si ha iniciado sesion, debe de traer el token
        if(token != null) {
            // estamos clonando y obteniendo el headers para el Bearer
            // esto se hace en el postman copiando el token en la parte de authorization y Bearer
            authRequest = authRequest.clone({
                // cabecera
                setHeaders: {Authorization: `Bearer ${token}`}
            })
        }
        return next.handle(authRequest);
    }
}

// este metodo llama a la clase AuthInterceptor, la que esta arriba de este codigo
// esta constante se tiene que agregar en la CLASE app.module.ts en provider
export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor, // se llamara la clase AuthInterceptor, es la clase que se usara para el Http Interceptor
        multi: true // permite agregar multiples interceptors
    }
]