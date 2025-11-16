# Repositorio Git SDAW_1638

Pequeña aplicación web en Node.js + Express para la práctica **"Uso de repositorios digitales (Git)"**.

## 1) Descripción y estructura

Estructura del proyecto:
```
/SDAW_1638
├── index.html
├── script.js
├── package.json
├── server.js
├── .gitignore
└── README.md
```

El servidor (`server.js`) sirve los archivos estáticos y expone la ruta `/api/hello` de prueba.

## 2) Requisitos previos
- Node.js instalado
- Git instalado
- VSCode (recomendado)

## 3) Puesta en marcha
```bash
npm install
npm start
# Abre http://localhost:3000
```

## 4) Comandos útiles (Git y Node)
```bash
# Inicializar proyecto (ya incluido)
npm init -y

# Instalar dependencias
npm install express

# Iniciar servidor
npm start

# ---- GIT ----
git init
git config user.name "9pzzm"
git config user.email "pablozzgm2003@gmail.com"
git config --list

git status
git add .
git commit -m "Primer commit: estructura base"

# Crear el repositorio remoto en GitHub (público) llamado SDAW_1638
# Luego enlazarlo (ejemplo con HTTPS)
git branch -M main
git remote add origin https://github.com/9pzzm/SDAW_1638.git
git push -u origin main

# Trabajar con ramas
git checkout -b rama1_PabloGarcia1Estudiante
# ... cambios y commit ...
git push -u origin rama1_PabloGarcia1Estudiante

git checkout main
git checkout -b rama2_PabloGarcia1Estudiante
# ... cambios y commit ...
git push -u origin rama2_PabloGarcia1Estudiante

# Consultas y restauración
git log --oneline
git diff
git restore -- <fichero>
git revert <hash_commit>
```

## 5) Información técnica añadida desde rama 1 explicado con mis palabras
En esta sección se describen los principales comandos de Git utilizados durante la práctica:
- `git init`: Inicializa un nuevo repositorio Git en la carpeta actual.
- `git add`: Añade archivos al área de preparación (staging) para el próximo commit.
- `git commit`: Registra de forma permanente los cambios del área de preparación en el historial.
- `git branch`: Crea, lista o elimina ramas. Con `-b` crea y cambia a la nueva rama.
- `git merge`: Fusiona la historia de una rama en la rama actual.
- `git push`: Envía commits locales al repositorio remoto.

## 6) Información técnica añadida desde rama 2
6002a53 (HEAD -> rama2_PabloGarcia1Estudiante, origin/main, main) Primer commit: estructura base

## 7) Pull requests e integración
1. Sube las ramas 1 y 2 a GitHub.
2. Abre un Pull Request por cada rama hacia `main`.
3. Resuelve conflictos si los hubiera **sin eliminar ninguna información previa**.
4. Acepta los PR manteniendo visibles las ramas 1 y 2.

## 8) Sincronización final
- Verifica en GitHub ramas, merges y commits.
- Actualiza tu `main` local:
  ```bash
  git checkout main
  git pull origin main
  ```

## 9) Prompt sugerido para generar/ajustar el README con IA
> Genera un README completo para una app de Node.js + Express llamada SDAW_1638.  
> Incluye descripción, estructura, pasos para ejecutar (npm install, npm start), comandos Git usados, capturas o fragmentos, y una conclusión. Añade además secciones para:  
> **Información técnica añadida desde rama 1** (explicando git init/add/commit/branch/merge/push) y  
> **Información técnica añadida desde rama 2** (pegando `git log --oneline`).

## 10) Licencia
MIT
hjnmkl,}
