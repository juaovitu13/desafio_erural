from models import Sala
from repositories import SalasRepository

class VideosServices:
    salaRepository: SalasRepository
    
    def __init__(self):    
        self.salaRepository = SalasRepository()
    
    #Por que o método add, da classe "SalasRepository" não é reconhecido aqui?
    
    def add(self, sala: Sala):
        return self.salaRepository.add(Sala)
        
    def update(self, sala: Sala):
        self.salas.append(sala)
    
    def getById(self, id)-> Sala: 
        self.salas.remove(id)
    
    def getAll(self): 
        return self.salas
    
    def delete(self, id):
        self.salas.remove(id)