# Antigravity NotebookLM MCP Server (Setup Guide)

[English](#english) | [Español](#español)

---

<a name="english"></a>
## English

This is a specialized guide and repository for implementing the **NotebookLM MCP Server** within **Antigravity**. While the server is based on the [notebooklm-mcp-server](https://github.com/gabote/notebooklm-mcp), this guide focuses on the unique authentication and configuration requirements for Antigravity users.

### Features
- **Full Notebook Access**: Create, list, and query your notebooks.
- **Source Management**: Add URLs, PDFs, or YouTube videos to your notebooks via MCP.
- **Deep Research**: Trigger deep research tasks directly from your AI agent.
- **Content Studio**: Generate audio overviews, FAQs, or study guides using the Studio tools.

### Installation

1. Install the server using Python (ensure you have Python 3.10+):
   ```bash
   pip install notebooklm-mcp-server
   ```

2. Locate the executable. On Windows, it usually resides in:
   `%APPDATA%\Python\Python3xx\Scripts\notebooklm-mcp.exe`

### Authentication (The Cookie Method)

NotebookLM requires authentication from a browser session. For Antigravity, the most reliable method is to use a `cookies.txt` file.

1. Install the **"Get cookies.txt LOCALLY"** extension in your browser.
2. Log in to [notebooklm.google.com](https://notebooklm.google.com).
3. Use the extension to export your cookies for `notebooklm.google.com` as a `cookies.txt` file.
4. Run the authentication command:
   ```bash
   notebooklm-mcp auth --file path/to/cookies.txt
   ```
5. This will save your credentials in `~/.notebooklm-mcp/auth.json`.

### Antigravity Configuration

Add the server to your `mcp_config.json`:

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "C:/Path/To/Your/Python/Scripts/notebooklm-mcp.exe",
      "args": []
    }
  }
}
```

---

<a name="español"></a>
## Español

Esta es una guía especializada y repositorio para implementar el **Servidor MCP de NotebookLM** dentro de **Antigravity**. Aunque el servidor se basa en [notebooklm-mcp-server](https://github.com/gabote/notebooklm-mcp), esta guía se centra en los requisitos únicos de autenticación y configuración para los usuarios de Antigravity.

### Características
- **Acceso Total a Cuadernos**: Crea, lista y consulta tus notebooks.
- **Gestión de Fuentes**: Agrega URLs, PDFs o videos de YouTube vía MCP.
- **Deep Research**: Activa tareas de investigación profunda directamente desde tu agente.
- **Estudio de Contenido**: Genera resúmenes de audio, FAQs o guías de estudio.

### Instalación

1. Instala el servidor usando Python (asegúrate de tener Python 3.10+):
   ```bash
   pip install notebooklm-mcp-server
   ```

2. Localiza el ejecutable. En Windows, suele estar en:
   `%APPDATA%\Python\Python3xx\Scripts\notebooklm-mcp.exe`

### Autenticación (Método de Cookies)

NotebookLM requiere autenticación de una sesión de navegador. Para Antigravity, el método más robusto es usar un archivo `cookies.txt`.

1. Instala la extensión **"Get cookies.txt LOCALLY"** en tu navegador.
2. Inicia sesión en [notebooklm.google.com](https://notebooklm.google.com).
3. Usa la extensión para exportar tus cookies de `notebooklm.google.com` en un archivo `cookies.txt`.
4. Ejecuta el comando de autenticación:
   ```bash
   notebooklm-mcp auth --file ruta/a/tu/cookies.txt
   ```
5. Esto guardará tus credenciales en `~/.notebooklm-mcp/auth.json`.

### Configuración en Antigravity

Agrega el servidor a tu archivo `mcp_config.json`:

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "C:/Ruta/A/Tu/Python/Scripts/notebooklm-mcp.exe",
      "args": []
    }
  }
}
```

### Ejemplos Incluidos
En la carpeta `/examples` encontrarás un prototipo de juego de trivia creado con **Phaser 3** que consume datos generados por NotebookLM.

---
Basado en el trabajo de [Jacob Ben-David](https://github.com/gabote/notebooklm-mcp).
