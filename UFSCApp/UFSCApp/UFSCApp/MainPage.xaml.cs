using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace UFSCApp
{
	public partial class MainPage : ContentPage
	{
		public MainPage()
		{
            InitializeComponent();
            Logout.Clicked += async (sender, e) =>
            {
                App.IsUserLoggedIn = false;
                Navigation.InsertPageBefore(new View.LoginView(), this);
                await Navigation.PopAsync();
            };
        }
    }
}
