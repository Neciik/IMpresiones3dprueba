Rails.application.routes.draw do
  get "contactos/contacto"
  get "contactos/contacto"
  get "productos", to: "pagina#productos"
  get "contacto", to: "contactos#contacto", as: "contacto"
  root "pagina#home"
end
