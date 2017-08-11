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
                 Dictionary<int, Dictionary<string, List<string>>> d = new Dictionary<int, Dictionary<string, List<string>>>();

                 Dictionary<string, List<string>> f1 = new Dictionary<string, List<string>>();
                 f1.Add("A", new List<string>());
                 f1.Add("B", new List<string>());
                 f1.Add("C", new List<string>());

                 d.Add(1, f1);

                 Dictionary<string, List<string>> f2 = new Dictionary<string, List<string>>();
                 f2.Add("D", new List<string> { "A" });
                 f2.Add("E", new List<string>());
                 f2.Add("F", new List<string>());

                 d.Add(2, f2);

                 Dictionary<string, List<string>> f3 = new Dictionary<string, List<string>>();
                 f3.Add("G", new List<string>() { "F" });
                 f3.Add("H", new List<string>() { "D" });

                 d.Add(3, f3);

                 Dictionary<string, List<string>> f4 = new Dictionary<string, List<string>>();
                 f4.Add("I", new List<string>());
                 f4.Add("J", new List<string>() { "H", "B" });

                 d.Add(4, f4);

                 Model.DisciplinaHelper helper = new Model.DisciplinaHelper(d);

                 foreach (KeyValuePair<string, int> entry in helper.Pontos)
                 {
                     System.Diagnostics.Debug.WriteLine(entry.Key+": "+entry.Value);
                 }

                 System.Diagnostics.Debug.WriteLine("#######################");

                 List<string> cursadas = new List<string>();
                 cursadas.Add("B");
                 cursadas.Add("C");


                 foreach (string s in helper.compute(cursadas, null))
                 {
                     System.Diagnostics.Debug.WriteLine(s);
                 }


                 App.IsUserLoggedIn = true;
                 Navigation.InsertPageBefore(new MainPage(), this);
                 await Navigation.PopAsync();
             };
        }
    }
}
