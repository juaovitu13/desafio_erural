#region Models
from pydantic import BaseModel

videos = [['kkk', 'joão']]

class Video(BaseModel):   
    id: str
    nome : str
    link : str

class Sala(BaseModel):    
    id: str
    nome: str
        
    def add_video(self, video):
        self.videos.append(video)
#endregion

#region WEB API
from fastapi import FastAPI

app = FastAPI()

#CRUD de salas
#Create
@app.post("/salas")
def criar_sala(sala: Sala):
    #Lógica para cadastrar uma sala    
    return {"message": "Sala cadastrada com sucesso!",
            "Dados da sala": {
                "Id": sala.id,
                "Nome": sala.nome
            }}
    #return sala

#Read -> Sala específica pelo id
@app.get("/salas/id")
def obter_sala_pelo_id(id: str):
    for i in range(len(videos)):
        if id == videos[i][0]:
    #Lógica para consultar uma sala    
         return {"message": "Retornar informação da sala de id: " + id}

#Read -> Todas as salas
@app.get("/salas")
def obter_salas():
    #Lógica para consultar uma sala    
    return {"message": "Retornar informação das salas cadastradas" }

#Update
@app.put("/salas")
def atualizar_sala(sala: Sala):
    
    #Lógica para atualizar uma sala 
    return {"message": "Sala atualizada com sucesso!",
            "Dados da sala": {
                "Id": sala.id,
                "Nome": sala.nome
            }}

#Delete
@app.delete("/salas/id")
def deletar_sala(id):
    
    #Lógica para deletar uma sala 
    return {"message": "Sala de id: " + id + " excluída com sucesso!"}
#endregion
