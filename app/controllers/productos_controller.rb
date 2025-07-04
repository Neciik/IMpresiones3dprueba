class PaginaController < ApplicationController
  def home
    # Aquí puedes tener lógica específica para la página de inicio
  end

  def productos # <--- ESTE ES EL MÉTODO QUE FALTA O NO ESTÁ GUARDADO
    # No necesitas lógica aquí si solo estás mostrando contenido estático
    # Rails automáticamente buscará app/views/pagina/productos.html.erb
  end

  def contacto
    # Si tienes una página de contacto estática, la acción iría aquí
  end
end
