"use client";
import React from 'react';
import { CheckCircle, MapPin, User, Phone, ChevronDown } from 'lucide-react';

const FungoKillerPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Article Header */}
            <div className="bg-gray-100 py-8 border-b border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                        <span className="text-yellow-600 font-bold">Dermatologie</span>
                        <span>•</span>
                        <span>{new Date().toLocaleDateString('de-DE')}</span>
                        <span>•</span>
                        <span>3 Minuten lesen</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                        Schutz vor Nagelpilz: Nie wieder schämen, Ihre Füße zu zeigen!
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Nach der Anwendung wird der Pilz abgetötet. Ihre Füße sehen wieder so schön aus wie zuvor. Diese Methode hilft selbst dann, wenn alle anderen Mittel versagen.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-4xl py-12">
                
                {/* Intro Section */}
                <div className="prose prose-lg max-w-none text-gray-700">
                    <div className="float-none md:float-left md:mr-8 mb-6 md:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                            alt="Gesunde Füße" 
                            className="rounded-xl shadow-lg w-full"
                        />
                        <p className="text-sm text-gray-500 mt-2 italic text-center">Gesunde Nägel nach der Behandlung</p>
                    </div>

                    <p className="mb-6">
                        <span className="font-bold text-2xl float-left mr-2 text-yellow-500">J</span>eder möchte wissen, wie man Nagelpilz loswird und ihn wirksam bekämpft. Ein Arzt in Deutschland hat eine Methode entwickelt, mit der Nagelpilz innerhalb einer Woche beseitigt werden kann und die Füße wieder so schön aussehen wie zuvor.
                    </p>
                    <p className="mb-6">
                        Selbst diejenigen, die trotz zahlreicher Behandlungen den Nagelpilz nicht loswerden konnten, wenden das Produkt einmalig an und haben wieder schöne Füße. Die Anwendung ist einfach und kann zu Hause durchgeführt werden. Die Wirksamkeit ist erwiesen.
                    </p>
                    <p className="mb-8">
                        Das Produkt ist sehr benutzerfreundlich und wird wie normaler Nagellack aufgetragen. Das Beste daran: Sie benötigen weder einen Arztbesuch noch eine Operation und können es zu einem günstigen Preis erwerben.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Dies ist eine neue Ära in der Dermatologie</h3>
                        <p>
                            Diese neue Behandlung gegen Nagelpilz hat in Deutschland schnell die Aufmerksamkeit von Experten auf sich gezogen. Sie beseitigt Pilzinfektionen innerhalb weniger Tage. Sie bekämpft die Auswirkungen von Nagelpilz auf Ihre Nägel, wie Verdickung, Verformung, übermäßiges Wachstum, Verfärbung, Einreißen und Abbrechen.
                        </p>
                    </div>

                    <p className="mb-6">
                        Die Wirkung setzt nach 7 Tagen ein und bereits nach 14 Tagen stellt sie die gesunde Farbe, Form und Struktur Ihrer Nägel wieder her. Das Wichtigste ist, dass sie Sie vor Pilzinfektionen schützt und eine schnelle Genesung ermöglicht. Die Behandlung ist nebenwirkungsfrei und besteht aus 100 % natürlichen Inhaltsstoffen.
                    </p>
                </div>

                {/* Testimonials Section */}
                <div className="mt-16 mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 border-b-2 border-yellow-500 inline-block pb-2 mx-auto">Erfahrungsberichte</h2>

                    {/* Story 1: Nora */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-10 shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3">
                                <img 
                                    src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&q=80&w=600" 
                                    alt="Glückliches Paar" 
                                    className="rounded-lg shadow-md w-full h-64 object-cover"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <div className="flex items-center mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">“Er hielt meine Hand nicht, jetzt küsst er sie!”</h3>
                                </div>
                                <p className="text-gray-700 italic mb-4">
                                    "Ich war sehr besorgt wegen meines Nagelpilzes, weil Männer so etwas bemerkten und keiner von ihnen mich zu einem zweiten Date einladen wollte. Natürlich hatte ich Glück, denn ich lernte Tobias kennen und verliebte mich in ihn. Aber er wollte meine Hand nicht halten, er sah sie nur an und wich ihr aus."
                                </p>
                                <p className="text-gray-700 mb-4">
                                    "Dann erfuhr ich von dieser Behandlung, und schon nach zwei Tagen verschwand der Nagelpilz. Meine Nägel waren nicht mehr gelb und verformt, sie splittern nicht mehr, und mein Freund küsst jetzt meine Hand. Wir sind jetzt ein glückliches Paar."
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">N</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-bold text-gray-900">Nora</p>
                                        <p className="text-xs text-gray-500">36 Jahre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story 2: Matteo */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-10 shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                            <div className="w-full md:w-1/3">
                                <img 
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" 
                                    alt="Matteo" 
                                    className="rounded-lg shadow-md w-full h-64 object-cover"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">"Ich habe keine Angst mehr davor, dass die Leute sich vor mir ekeln"</h3>
                                <p className="text-gray-700 italic mb-4">
                                    "Mao erzählt mir, dass er sich sehr erleichtert fühlt, weil er sich in Gesellschaft anderer Menschen nicht mehr unwohl fühlt. Meine Füße sahen furchtbar aus, rochen unangenehm und meine Nägel wuchsen seltsam. Wenn ich mich meinen Enkelkindern auf dem Feld näherte, hatte ich große Angst und fühlte mich unwohl."
                                </p>
                                <p className="text-gray-700 mb-4">
                                    "Jetzt ist es nur noch eine schlechte Erinnerung. Der Pilz ist weg. Es war so einfach. Ich möchte einfach nur noch meinem Nachbarn die Hand geben. Meine Enkelkinder können jetzt mit ihnen spielen."
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">M</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-bold text-gray-900">Matteo</p>
                                        <p className="text-xs text-gray-500">65 Jahre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story 3: Olivia */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-10 shadow-sm border border-gray-100">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3">
                                <img 
                                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=600" 
                                    alt="Olivia" 
                                    className="rounded-lg shadow-md w-full h-64 object-cover"
                                />
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">"Ich kann jetzt zur Kosmetikerin gehen!"</h3>
                                <p className="text-gray-700 italic mb-4">
                                    "Meine Arbeitgeber haben mich entlassen, weil ich angeblich Pilzinfektionen verbreitet habe. Alle haben mich angestarrt, als wäre ich aussätzig. Ich habe 1500 € ausgegeben für Behandlungen, aber nichts hat geholfen."
                                </p>
                                <p className="text-gray-700 mb-4">
                                    "Und jetzt bin ich nach zwei Wochen pilzfrei. Ich fühle mich endlich wieder wie eine richtige Frau. Also gehe ich jetzt wieder ins Schwimmbad, zur Kosmetikerin und lasse mir die Füße pflegen."
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">O</div>
                                    <div className="ml-3">
                                        <p className="text-sm font-bold text-gray-900">Olivia</p>
                                        <p className="text-xs text-gray-500">45 Jahre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Science Section */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-16">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/3">
                            <img 
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" 
                                alt="Dr. Anika" 
                                className="rounded-xl w-full object-cover h-80"
                            />
                            <p className="text-center text-sm text-gray-500 mt-2 font-bold">Dr. Anika, Wissenschaftlerin</p>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Die Entdeckung eines deutschen Wissenschaftlers</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Eine Behandlungsmethode, die Pilzinfektionen auch in scheinbar hoffnungslosen Fällen erfolgreich bekämpft, ist <span className="font-bold text-yellow-600">Fungo Killer</span>. Entdeckt wurde sie von Dr. Anika, einer international renommierten deutschen Wissenschaftlerin, die seit 20 Jahren in Zürich, Schweiz, lebt und arbeitet.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Dr. Anika hat bereits in über einem Dutzend Studien Erfolge erzielt. Diesmal hat sie nach jahrelanger Forschung zu dermatologischen Problemen zahlreiche Wissenschaftler für sich gewinnen können und eine wirksame Entdeckung gegen Nagelpilz gemacht.
                            </p>
                            
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-lg mb-4 text-gray-900">Hohe Wirksamkeit, hervorragende Ergebnisse</h4>
                                <ul className="space-y-3">
                                    {[
                                        "100% der Pilze beseitigt: Entfernt Dermatophyten, Hefe- und Schimmelpilze in nur 2 Tagen.",
                                        "Verhindert Pilzwachstum: Absorbiert Feuchtigkeit und stoppt Ausbreitung.",
                                        "Verbessert Durchblutung: Beschleunigt die Heilung und Nährstoffversorgung.",
                                        "Regeneriert Nägel: Stellt Elastizität, Form und Farbe wieder her.",
                                        "Schützt vor Schäden: Stärkt die Nagelplatte gegen Neubefall."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action & Form */}
                <div id="order-form" className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 text-center mb-10">
                        <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
                            Sonderangebot
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Zuschüsse für Einwohner</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Wir gratulieren Dr. Anika zu ihrem Erfolg. Bestellen Sie jetzt mit Rabatt, bis das Angebot an den nächsten Leser weitergegeben wird!
                        </p>
                    </div>

                    <div className="max-w-md mx-auto bg-white rounded-xl p-6 md:p-8 text-gray-900 shadow-xl">
                        <h3 className="text-2xl font-bold text-center mb-6">FUNGO KILLER BESTELLEN</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Land</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent appearance-none">
                                        <option>Deutschland</option>
                                        <option>Bangladesh</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ihr Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input 
                                        type="text" 
                                        placeholder="Geben Sie Ihren Namen ein"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                    <input 
                                        type="tel" 
                                        placeholder="+49 123 456789"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-lg hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-lg mt-4">
                                JETZT BESTELLEN -50%
                            </button>
                            
                            <p className="text-xs text-center text-gray-500 mt-4">
                                *Begrenztes Angebot. Lieferung in 1-3 Werktagen.
                            </p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FungoKillerPage;