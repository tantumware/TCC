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

            this.loginButton.Clicked += async(sender, e) =>
            {
            System.Diagnostics.Debug.WriteLine("aaaaaaa");
            await Navigation.PushAsync(new View.DisciplinaView()); 
            };
		}
    }
}
