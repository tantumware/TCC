using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace UFSCApp.View
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class LoginView : ContentPage
    {
        public LoginView()
        {
            InitializeComponent();

            this.loginButton.Clicked += async (sender, e) =>
             {
                 App.IsUserLoggedIn = true;
                 Navigation.InsertPageBefore(new MainPage(), this);
                 await Navigation.PopAsync();
             };
        }
    }
}
