from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from ws_manager import manager

app = FastAPI()

@app.websocket("/ws/{username}")
async def websocket_endpoint(websocket: WebSocket, username: str): 
    await manager.connect(websocket)

    try:
        while True:
            message = await websocket.receive_text()
            await manager.broadcast(f"{username}-{message}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast(f"User {username} disconnected")


