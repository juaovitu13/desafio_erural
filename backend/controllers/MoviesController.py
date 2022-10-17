#region Models
from pydantic import BaseModel

class Video(BaseModel):   
    id: str
    nome : str
    link : str

class Sala(BaseModel):    
    id: str
    nome: str

        
    def add_video(self, salas):
        self.videos.append(salas)

salas:Sala = []
#endregion

#region WEB API
from fastapi import FastAPI

app = FastAPI()

#region #CRUD de salas
#Create
@app.post("/salas/criar")
def criar_sala(sala: Sala):
    #Lógica para cadastrar uma sala 
    salas.append(sala)    
    return {"message": "Sala cadastrada com sucesso!",
            "Dados da sala": {
                "Id": sala.id,
                "Nome": sala.nome
            }}

#Read -> Sala específica pelo id
@app.get("/salas/{id_sala}")
def obter_sala_pelo_id(id_sala: str):

    for i in range(len(salas)):
        if salas[i].id == id_sala:
         return salas[i]
    return{"Status": 404, "Mensagem": "Sala não encontrada"}

#Read -> Todas as salas
@app.get("/salas")
def obter_salas():

    return salas
    
#Update
@app.put("/salas/atualizar")
def atualizar_sala(sala: Sala):
    for i in range(len(salas)):
        if salas[i].id == sala.id:
         salas[i] = sala
         return {"message": "Sala de id: " + sala.id + " atualizada com sucesso!"}
    return{"Status": 404, "Mensagem": "Sala não encontrada"}

#Delete
@app.delete("/salas/deletar")
def deletar_sala(id: str):
    for i in range(len(salas)):
        if salas[i].id == id:
         del salas[i]
         return {"message": "Sala de id: " + id + " excluída com sucesso!"}
    return{"Status": 404, "Mensagem": "Sala não encontrada"}
#endregion

#region cadastro de vídeos nas salas
@app.post("/salas/{id}/videos")
def cadastrar_video(id, video: Video):
    #Lógica para cadastrar uma sala 
    for i in range(len(salas)):
        if salas[i].id == id:
         salas[i].videos.append(video)
         return {"message": "Vídeo cadastrado com sucesso!"}
    return{"Status": 404, "Mensagem": "Sala não encontrada"}

#endregion

#endregion
