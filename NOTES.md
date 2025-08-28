
GerkensFysGaard 


### URL 
SEO, hits


fysio-terapeut.dk
dinfysio-terapeut.dk

hostes af: Simply.com

Holistisk Sundhedshus 

### KravSpec

Fys Første Konsultation 
	600 - 800 kr 


## Frontend 


*Login 
	Journal 
	Tidligere bookinger 



### Navbar struktur 

Nav Bar 

	Behandlinger 
		Fysiologisk Massage 
		Personlig træning 
		Fysioterapi 
		Telefon Konsultation 

	Symptomer 
	

	Book Tid 
		EasyMe Booking system 
	Priser 
		Se alle Behandlinger 
	Om* 
		Om GerkensFysGaard 
		Alexander, Hvem er jeg 	


Bund Nav bar 

	Kontakt 
	Anmeldelser 



Betaling ( 3. part ) 





## Database 
	easyme link til louise og alex:
	https://ezme.io/c/xEF/zGvg

	
### Database forslag 
Behandlinger? 
	id: 
	navn:
	forløb: string; (3 uger)
	pris: 600 kr 
	area: string; 
	beskrivelse:
	
	

export interface Customer {
	id: string;
	Password: string; 
	name: string;
	email: string;
	phone?: string;
	address?: string; (GDPR) 
	createdAt: Date;
	updatedAt: Date;
	lastAppointment: Date; 
	problem: string; **
	notes?: string;
}




## Holistisk sundheds hus 
### Issues 
forside > Søgning 
forside > Nyhedsbrev

links > ArosKST.dk

footer > Find os 