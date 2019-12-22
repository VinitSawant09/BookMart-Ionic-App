import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { setState, getState } from  'ts-state'
import { SMS } from '@ionic-native/sms/ngx';
import { ToastController } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.page.html',
  styleUrls: ['./buynow.page.scss'],
})
export class BuynowPage implements OnInit {

  sub: any;
  book :any;
  addBook:any;
  prevBook:any;
  name:string;
  address:string;
  message:string;
  socialmessage:string;

  
  constructor(private alertCtrl: AlertController,
    private vibration: Vibration,private sms: SMS,public toastController: ToastController,
    private androidPermissions: AndroidPermissions,public socialsharing:SocialSharing) {
    
                 }
  ngOnInit() {
    
      
      this.book=  getState()['book'];
   
     // console.log(getState()['purchased']);
     // console.log(this.book.author);
      
    
  }

  

 async presentPrompt() {
   
    let alert = await this.alertCtrl.create({
      header: 'Enter your Details',
      subHeader:'(Cash on Delivery only.)',
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter your name',
          type:'text'
        },
        {
          name: 'address',
          placeholder: 'Enter your Address',
          type:'text'
         
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Order',
          handler: data => {
            
            if ( data.name==='' || data.address==='') {

             //   console.log('empty fields');
              
               this.presentEmptyFieldToast();
             
              return false;
            } else {
              this.name= data.name;
              this.address= data.address;
              setState({purchased:'yes'});
             
              
              this.prevBook=getState()['bookBrought'];
             
              this.addBook= this.book;
              this.prevBook.push(this.addBook);
              setState({bookBrought:this.prevBook});
             
              this.presentConifrmPrompt();
            
              return true;
              
            }
          }
        }
      ]
    });
   
    await alert.present();
   
  }

 
  

  async presentConifrmPrompt() {
   
    let alert = await this.alertCtrl.create({
      header: 'Book delivered',
      subHeader:'Cash on Delivery only.',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          
        } 
      ]
    });
   
    await alert.present();
  
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).then(() => {
    //this is to send SMS
    this.message="Name:"+this.name+" Address:"+this.address+ " Book name:"+this.book.title;
    this.sms.send('0894861311', this.message);
    });
  
    this.vibration.vibrate(1000);
    this.presentToast();
  }
   
  async presentToast() {
   
    const toast = await this.toastController.create({
      message: "Order details have been sent to Book Mart team. Thank you for choosing Book Mart",
      duration: 2000
    });
    toast.present();
  }
  

  async presentEmptyFieldToast() {
   
    const toast = await this.toastController.create({
      message: "Fields cannot be blank.",
      duration: 2000
    });
    toast.present();
  }


  async share()
  {
    this.socialmessage="Book Name :"+this.book.title+"\nAuthor Name :"+this.book.author+"\nPrice in euros:"+this.book.price+"\nOnly on Book Mart app";
    this.socialsharing.shareViaWhatsApp(this.socialmessage).then(()=>{
      console.log("Success in sharing on Whatsapp.!!!");

    }).catch(()=>{
      console.log("Error sharing on Whatsapp.!!!");
    });
  }
}
