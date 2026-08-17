# Supabase Docker Setup

Este proyecto configura un entorno completo de Supabase utilizando Docker y Docker Compose. Incluye servicios esenciales como la base de datos, autenticación, almacenamiento y funcionalidades en tiempo real.

## Requisitos Previos

- Docker: Asegúrate de tener Docker instalado en tu sistema.
- Docker Compose: También es necesario tener Docker Compose.

## Configuración Inicial

1. Clona este repositorio:

   ````bash
   	git clone https://github.com/tuusuario/supabase-docker-setup.git
   	cd supabase-docker-setup
   	```

   ````

2. Abre el archivo `docker-compose.yml` y personaliza las siguientes variables de entorno:

   - `POSTGRES_PASSWORD`: Contraseña del usuario de Postgres.
   - `POSTGRES_USER`: Nombre de usuario de Postgres.
   - `POSTGRES_DB`: Nombre de la base de datos de Postgres.
   - `SUPABASE_PASSWORD`: Contraseña de Supabase.
   - `GOTRUE_JWT_SECRET`: Secreto JWT para autenticación.
   - `ANON_KEY`: Clave de anonimato para Supabase.
   - `SERVICE_KEY`: Clave de servicio para Supabase.

## Uso

### Levantar los servicios

Para iniciar los servicios, ejecuta:

```bash
docker-compose up -d
```

## Verificar el estado

Puedes verificar si los contenedores están corriendo correctamente usando:

```bash
docker-compose ps
```

## Apagar los servicios

Para detener y eliminar los contenedores, ejecuta:

```bash
docker-compose down
```

## Personalización

Puedes personalizar el archivo docker-compose.yml para agregar otros servicios de Supabase o modificar la configuración existente.

## Solución de Problemas

### El servicio no se levanta

- Verifica los logs con docker-compose logs.
- Asegúrate de que no hay conflictos de puertos con otros servicios que se estén ejecutando en tu máquina.

## Contribuciones

Las contribuciones son bienvenidas. Puedes abrir un issue o enviar un pull request con tus mejoras.

## Licencia

Este proyecto está bajo la Licencia MIT.
