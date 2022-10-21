#region Models
from pydantic import BaseModel

class Video(BaseModel):   
    id: str
    nome : str
    link : str

class Sala(BaseModel):    
    id: str
    nome: str
    videos: Video = []

salas: Sala = []
#endregion

#region WEB API
from fastapi import FastAPI
app = FastAPI()

#region Configuração para permitir conexão apartir do frontend
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#endregion

#region CRUD de salas
#Create
@app.post("/salas")
def criar_sala(sala: Sala):
    
    if(salaJaCadastrada(sala)):
        return{"message": "Não foi possível cadastrar a sala. Id já utilizado"} 
    
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
@app.put("/salas") 
#esse é o método que você tem que consumir agora, lá do lado do javascript
def atualizar_sala(sala: Sala):
    for i in range(len(salas)):
        if salas[i].id == sala.id:
         salas[i] = sala
         return {"message": "Sala de id: " + sala.id + " atualizada com sucesso!"}
    return{"Status": 404, "Mensagem": "Sala não encontrada"}

#Delete
@app.delete("/salas/{id}")
def deletar_sala(id: str):
    for i in range(len(salas)):
        if salas[i].id == id:
            del salas[i]
            return {"message": "Sala de id: " + id + " excluída com sucesso!"}
    return{"Status": 404, "Mensagem": "Sala não encontrada!"}

def salaJaCadastrada(sala):
    for i in range(len(salas)):
        if salas[i].id == sala.id:
            return True
    return False

#endregion

#region CRUD vídeos nas salas

#incluir um vídeo em uma sala
@app.post("/salas/{id}/videos")
def cadastrar_video(id, video: Video):
    for i in range(len(salas)):
        if salas[i].id == id:
            salas[i].videos.append(video)
            return {"message": "Vídeo cadastrado com sucesso!"}
    return{"Status": 404, "Mensagem": "Sala não encontrada"}


#deletar um vídeo em uma sala
@app.delete("/salas/{id_sala}/videos/{id_video}")
def deletar_video(id_sala, id_video):
    
    for i in range(len(salas)):
        
        if salas[i].id == id_sala:
        
            for j in range(len(salas[i].videos)):
        
                if str(salas[i].videos[j].id) == str(id_video):
                    del salas[i].videos[j]
                    return {"message": "Vídeo deletado com sucesso!"}

            return{"Status": 404, "Mensagem": "Vídeo não encontrado na sala!"}    

    return{"Status": 404, "Mensagem": "Sala não encontrada!"}    

#endregion

#endregion