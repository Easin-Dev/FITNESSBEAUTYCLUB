"use client";
import React, { useState, useCallback } from 'react'; // Added useState and useCallback
import {
    CheckCircle, MapPin, User, Phone, ChevronDown,
    Clock, Facebook, Instagram, Twitter, Package, Globe
} from 'lucide-react'; // Added Package and Globe

const FungoKillerPage = () => {
    // --- Article Header Mock Data and Constants ---
    const authorName = "Laura Krenn";
    const authorRole = "Redakteurin der Rubrik";
    const topic = "PILZERKRANKUNG";
    const readingTime = "3 Minuten lesen";
    // --- End Article Header Data ---

    // --- NEW: Order Form Component ---
    const OrderForm = () => {
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [country, setCountry] = useState('Bangladesh');
        const [isSubmitting, setIsSubmitting] = useState(false);
        const [message, setMessage] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();

            const payload = {
                name,
                phone,
                country,
                productKey: "fungo_killer",
            };

            console.log("📤 Sending order:", payload);

            const res = await fetch("/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log("📥 API response:", data);

            if (data.success) {
                setMessage({
                    type: "success",
                    text: "Order successful! Our team will contact you.",
                });
            } else {
                setMessage({
                    type: "error",
                    text: data.error || "Order failed",
                });
            }
        };




        return (
            // The form section now has a specific ID for the call-to-action links to scroll to
            <div id="order-form-section" className="mt-12 pt-8 border-t-4 border-red-600 bg-red-50 p-6 sm:p-8 rounded-xl shadow-2xl">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-red-800 text-center mb-6 leading-tight">
                    <Package className="inline w-8 h-8 mr-2 text-red-600" />
                    Ihre Bestellung sichern
                </h2>

                {/* Prominent 50% Discount Banner (As requested) */}
                <div className="bg-red-600 text-white p-4 sm:p-5 rounded-lg mb-8 shadow-xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest">
                        NUR FÜR KURZE ZEIT
                    </p>
                    <p className="text-4xl sm:text-5xl font-black mt-1">
                        50% RABATT SICHERN!
                    </p>
                    <div className="flex justify-center items-center mt-3">
                        <span className="text-lg line-through opacity-75 mr-3">78€</span>
                        <span className="text-3xl font-bold">NUR 39€</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Country/Region Field */}
                    <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <Globe className="w-4 h-4 mr-2" />
                            Land/Region:
                        </label>
                        <select
                            id="country"
                            name="country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 appearance-none bg-white"
                            required
                            disabled={isSubmitting}
                        >
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Germany">Deutschland</option>
                            <option value="Austria">Österreich</option>
                            <option value="Switzerland">Schweiz</option>
                            <option value="Other">Andere</option>
                        </select>
                    </div>

                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            Ihr Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ihr vollständiger Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            Telefonnummer:
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+49 / 017..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Submission Message Box */}
                    {message && (
                        <div className={`p-4 rounded-lg text-center font-semibold transition duration-300 ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {message.text}
                        </div>
                    )}

                    {/* Submit Button (With 50% discount text) */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.01] uppercase tracking-wider text-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        {isSubmitting ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            'FUNGO KILLER BESTELLEN (50% RABATT)'
                        )}
                    </button>

                    <p className='text-xs text-center text-gray-500 mt-4'>
                        Die Kosten der Lieferung erhalten Sie bei unserem Mitarbeiter. Angebot gültig bis (einschließlich): <span className='text-red-600 font-bold'>25/11/2025</span>
                    </p>

                </form>
            </div>
        );
    };
    // --- End Order Form Component ---


    // Utility Component for Sidebar Content (Mock)
    const SidebarRecommendation = () => (
        <div className="bg-gray-50 border border-gray-200 p-4 sm:p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
                <CheckCircle className="inline w-5 h-5 text-green-600 mr-2" />
                Experten-Empfehlung
            </h3>
            <div className="flex justify-center mb-4">
                <img
                    src="https://placehold.co/150x150/49A2A8/FFFFFF?text=Fungo+Killer+Produkt"
                    alt="Fungo Killer Produkt"
                    className="w-2/3 h-auto rounded-lg shadow-md"
                />
            </div>
            <p className="text-sm text-gray-700 mb-4">
                Sichern Sie sich den Fungo Killer mit dem exklusiven Zuschuss direkt über die offizielle Website von Dr. Annika.
            </p>
            <div className="text-center mb-4">
                <span className="text-sm font-semibold text-gray-500 line-through mr-3">78 €</span>
                <span className="text-3xl font-extrabold text-red-600">39 €</span>
            </div>
            {/* Updated href to link to the new form section */}
            <a
                href="#order-form-section"
                className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition duration-300 transform hover:scale-[1.02] shadow-xl"
            >
                Jetzt mit Zuschuss bestellen
            </a>
            <p className="text-xs text-center text-gray-500 mt-2">
                Angebot gültig bis zum Ende dieser Woche!
            </p>
        </div>
    );

    return (
        // Increased max-w for better centering on large screens, maintained base padding
        <div className="bg-white text-gray-800 p-4 md:p-8">

            {/* ARTICLE CONTENT GRID: Main content (2/3) and Sidebar (1/3) */}
            {/* Max width applied to center the entire article structure */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto max-w-7xl'>

                {/* LEFT COLUMN: Main Article Content (Takes full width on mobile, 2/3 on large screens) */}
                <div className='lg:col-span-2 space-y-6'>

                    {/* Main Headline - Text size scales down on small screens */}
                    <h1 className='text-3xl sm:text-4xl font-bold leading-tight'>
                        <span className='text-red-600 font-extrabold'>HIT für Nagelpilz:</span> „Keine Scham mehr! Sie wenden es einmal an und das Problem ist gelöst. Es funktioniert, wenn alles andere versagt hat."
                    </h1>

                    {/* INTEGRATED ARTICLE HEADER (Author/Social/Time) - Enhanced for mobile stacking */}
                    <div className="p-0 bg-white max-w-full mx-auto font-sans mb-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">

                            {/* LEFT SIDE: Author Information */}
                            <div className="flex items-start space-x-3 flex-shrink-0">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                                    <img
                                        src="https://placehold.co/100x100/A0AEC0/FFFFFF?text=LK"
                                        alt="Laura Krenn"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-gray-900 leading-tight">
                                    <p className="text-sm sm:text-base font-semibold">
                                        {authorName}, <span className="font-normal text-xs sm:text-sm">{authorRole}</span>
                                    </p>
                                    <p className="text-lg sm:text-xl font-bold uppercase mt-1 text-yellow-700">
                                        {topic}
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT SIDE: Reading Time and Action Icons */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                                {/* Reading Time Pill */}
                                <div className="flex items-center space-x-2 bg-yellow-400 text-gray-900 font-bold py-1 px-3 sm:py-2 sm:px-4 rounded-full text-sm flex-shrink-0">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>{readingTime}</span>
                                </div>
                                {/* Social Media Icons */}
                                <div className="flex items-center space-x-3 text-gray-700">
                                    <a href="#facebook" aria-label="Share on Facebook" className="hover:text-blue-600 transition duration-200">
                                        <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a href="#instagram" aria-label="Share on Instagram" className="hover:text-pink-600 transition duration-200">
                                        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                    <a href="#twitter" aria-label="Share on Twitter" className="hover:text-blue-400 transition duration-200">
                                        <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END INTEGRATED ARTICLE HEADER */}

                    {/* Image Block with Before/After Labels */}
                    <div>
                        <img
                            className='object-cover w-full h-auto rounded-t-lg'
                            src="https://feleo.net/content/TqCBNIuWxwKnk3Z/images/img2-7c65e506.jpg"
                            alt="Vorher/Nachher Vergleich von Fußnägeln"
                        />
                        <div className='flex text-sm sm:text-base font-semibold'>
                            <h2 className='w-full text-center py-2 bg-[#BFCFD2] rounded-bl-lg'>VORHER</h2>
                            <h2 className='w-full text-center py-2 bg-[#478D99] text-white rounded-br-lg'>NACH 14 TAGEN</h2>
                        </div>
                    </div>

                    {/* Main Content Paragraphs */}
                    <p>Jeder möchte wissen, wie man Nagelpilz loswird und ihn wirksam bekämpft. Ein Arzt in Deutschland hat eine Methode entwickelt, mit der Nagelpilz innerhalb einer Woche beseitigt werden kann und die Füße wieder so schön aussehen wie zuvor.</p>
                    <p className='mt-4'>Selbst diejenigen, die trotz zahlreicher Behandlungen den Nagelpilz nicht loswerden konnten, wenden das Produkt einmalig an und haben wieder schöne Füße. Die Anwendung ist einfach und kann zu Hause durchgeführt werden. Die Wirksamkeit ist erwiesen.</p>
                    <p className='mt-4'>Das Produkt ist sehr benutzerfreundlich und wird wie normaler Nagellack aufgetragen. Das Beste daran: Sie benötigen weder einen Arztbesuch noch eine Operation und können es zu einem günstigen Preis erwerben.</p>

                    <h1 className='text-2xl text-[#49A2A8] font-bold mt-8'>Dies ist eine neue Ära in der Dermatologie</h1>

                    <p>Diese neue Behandlung gegen Nagelpilz hat in Deutschland schnell die Aufmerksamkeit von Experten auf sich gezogen. Sie beseitigt Pilzinfektionen innerhalb weniger Tage. Sie bekämpft die Auswirkungen von Nagelpilz auf Ihre Nägel, wie Verdickung, Verformung, übermäßiges Wachstum, Verfärbung, Einreißen und Abbrechen.</p>

                    <p className='mt-4'>Die Wirkung setzt nach 7 Tagen ein und bereits nach 14 Tagen stellt sie die gesunde Farbe, Form und Struktur Ihrer Nägel wieder her. Das Wichtigste ist, dass sie Sie vor Pilzinfektionen schützt und eine schnelle Genesung ermöglicht. Die Behandlung ist nebenwirkungsfrei und besteht aus 100 % natürlichen Inhaltsstoffen. Sie hat eine nachhaltige Wirkung auf die Gesundheit Ihrer Füße, sodass diese nicht mehr von Pilz befallen werden können.</p>
                    <hr className='my-8' />

                    <p className='font-bold text-xl'>Hier sind einige Erfahrungsberichte von Leuten, die es benutzt haben:</p>

                    {/* TESTIMONIAL 1: Nora */}
                    <div className='bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200'>
                        <h1 className='text-2xl sm:text-3xl font-bold text-red-700'>“Er hielt meine Hand nicht, jetzt küsst er sie!”</h1>
                        <hr className='my-3' />
                        <p className='text-sm mt-1'>
                            Dirty sagt, dass sie wegen ihres Nagelpilzes niemand mochte und dass sie jetzt in einer glücklichen Beziehung ist und die beiden planen zu heiraten.
                        </p>
                        <p className='text-sm mt-3'>Ich war sehr besorgt wegen meines Nagelpilzes, weil Männer so etwas bemerkten und keiner von ihnen mich zu einem zweiten Date einladen wollte.</p>
                        <p className='text-sm mt-3'>Natürlich hatte ich Glück, denn ich lernte Tobias kennen und verliebte mich in ihn. Aber er wollte meine Hand nicht halten, er sah sie nur an und wich ihr aus. Sechs Monate lang lernte ich weder seine Freunde noch seine Familie kennen, weil er mich ihnen nicht vorstellen wollte.</p>

                        <div className='my-6'>
                            <img
                                className='object-cover w-full h-auto rounded-t-lg'
                                src="https://feleo.net/content/TqCBNIuWxwKnk3Z/images/img3-28cdad15.jpg"
                                alt="Vorher/Nachher Vergleich von Händen"
                            />
                            <div className='flex text-sm sm:text-base font-semibold'>
                                <h2 className='w-full text-center py-2 bg-[#BFCFD2] rounded-bl-lg'>VORHER</h2>
                                <h2 className='w-full text-center py-2 bg-[#478D99] text-white rounded-br-lg'>NACH 14 TAGEN</h2>
                            </div>
                        </div>

                        <p className='italic text-sm'>
                            Dann erfuhr ich von dieser Behandlung, und schon nach zwei Tagen verschwand der Nagelpilz. Meine Nägel waren nicht mehr gelb und verformt, sie splittern nicht mehr, und mein Freund küsst jetzt meine Hand. Wir sind jetzt ein glückliches Paar.
                        </p>
                        <p className='font-bold mt-3 text-base'>Nora, 36 Jahre</p>
                    </div>

                    {/* TESTIMONIAL 2: Matteo */}
                    <div className='bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200 mt-8'>
                        <h1 className='text-2xl sm:text-3xl font-bold text-red-700'>"Ich habe keine Angst mehr davor, dass die Leute sich vor mir ekeln".</h1>
                        <hr className='my-3' />
                        <p className='text-sm mt-1'>
                            <span className='font-semibold'>Dermatologische Information</span>
                            <br />
                            Matteo erzählt mir, dass er sich sehr erleichtert fühlt, weil er sich in Gesellschaft anderer Menschen nicht mehr unwohl fühlt.
                        </p>
                        <p className='text-sm mt-3'>Meine Füße sahen furchtbar aus, rochen unangenehm und meine Nägel wuchsen seltsam. Sie waren wirklich in einem erbärmlichen Zustand. Die Ladenbesitzer nahmen meine Rechnung immer genervt entgegen.</p>
                        <p className='text-sm mt-3'>Wenn ich mich meinen Enkelkindern auf dem Feld näherte, hatte ich große Angst und fühlte mich unwohl, weil es ansteckend war. Wenn ich versuchte, sie zu umarmen, weinten sie. Ich war eine Gefahr für meine eigenen Enkelkinder.</p>

                        <div className='my-6'>
                            <img
                                className='object-cover w-full h-auto rounded-t-lg'
                                src="https://feleo.net/content/TqCBNIuWxwKnk3Z/images/img4-d026b512.jpg"
                                alt="Vorher/Nachher Vergleich von Fußnägeln eines Mannes"
                            />
                            <div className='flex text-sm sm:text-base font-semibold'>
                                <h2 className='w-full text-center py-2 bg-[#BFCFD2] rounded-bl-lg'>VORHER</h2>
                                <h2 className='w-full text-center py-2 bg-[#478D99] text-white rounded-br-lg'>NACH 14 TAGEN</h2>
                            </div>
                        </div>

                        <p className='italic text-sm'>Jetzt ist es nur noch eine schlechte Erinnerung. Der Pilz ist weg. Es war so einfach. Ich möchte einfach nur noch meinem Nachbarn die Hand geben. Meine Enkelkinder können jetzt mit ihnen spielen, weil sie keine Angst mehr vor mir haben und sich nicht mehr an meinen Händen stören. Ich muss jetzt nicht mehr mit Socken aus dem Haus gehen. Ich kann mich frei bewegen. Meine Füße riechen nicht mehr! Was für eine Erleichterung!</p>
                        <p className='font-bold mt-3 text-base'>Matteo, 65 Jahre</p>
                    </div>

                    {/* TESTIMONIAL 3: Olivia */}
                    <div className='bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200 mt-8'>
                        <h1 className='text-2xl sm:text-3xl font-bold text-red-700'>"Ich kann jetzt zur Kosmetikerin gehen!"</h1>
                        <hr className='my-3' />
                        <p className='text-sm mt-1'>
                            <span className='font-semibold'>Informationen zu Hautkrankheiten</span>
                            <br />
                            Olivia ist nach fünf Jahren Leiden nun frei von ihrer Pilzinfektion.
                        </p>
                        <p className='text-sm mt-3'>Meine Arbeitgeber haben mich entlassen, weil ich angeblich Pilzinfektionen verbreitet habe.</p>
                        <p className='text-sm mt-3'>Alle haben mich angestarrt, als wäre ich aussätzig. Es war die erniedrigendste Zeit meines Lebens. Ich habe viele Behandlungen ausprobiert, aber nichts hat geholfen. Später habe ich Laserbehandlungen versucht, aber auch die brachten nichts. Ich bin nicht mehr ins Spa gegangen. Ich habe 1500 € ausgegeben.</p>

                        <div className='my-6'>
                            <img
                                className='object-cover w-full h-auto rounded-t-lg'
                                src="https://feleo.net/content/TqCBNIuWxwKnk3Z/images/img5-6a5d6720.jpg"
                                alt="Vorher/Nachher Vergleich von Fußnägeln einer Frau"
                            />
                            <div className='flex text-sm sm:text-base font-semibold'>
                                <h2 className='w-full text-center py-2 bg-[#BFCFD2] rounded-bl-lg'>VORHER</h2>
                                <h2 className='w-full text-center py-2 bg-[#478D99] text-white rounded-br-lg'>NACH 14 TAGEN</h2>
                            </div>
                        </div>

                        <p className='italic text-sm'>
                            Und jetzt bin ich nach zwei Wochen pilzfrei. Ich fühle mich endlich wieder wie eine richtige Frau und kann mich um mich selbst kümmern.
                            <br />
                            Also gehe ich jetzt wieder ins Schwimmbad, zur Kosmetikerin und lasse mir die Füße pflegen. Endlich muss ich meine Füße nicht mehr verstecken.
                        </p>
                        <p className='font-bold mt-3 text-base'>Olivia, 45 Jahre</p>
                    </div>

                    {/* Scientist/Specialist Section */}
                    <div className='pt-8 mt-8 border-t border-gray-300'>
                        <img
                            className='object-cover w-full h-auto rounded-lg mb-4'
                            src="https://feleo.net/content/TqCBNIuWxwKnk3Z/images/i7.jpg"
                            alt="Wissenschaftliche Forschung"
                        />
                        <hr className='mt-5' />
                        <h1 className='text-2xl text-[#49A2A8] font-bold mt-4'>Die Entdeckung wurde von einem deutschen Wissenschaftler gemacht.</h1>
                        <p className='mt-4'>Eine Behandlungsmethode, die Pilzinfektionen auch in scheinbar hoffnungslosen Fällen erfolgreich bekämpft, ist Fungo Killer. Entdeckt wurde sie von Dr. Annika, einer international renommierten deutschen Wissenschaftlerin, die seit 20 Jahren in Zürich, Schweiz, lebt und arbeitet.</p>
                        <p className='mt-4'>Dr. Annika hat bereits in über einem Dutzend Studien Erfolge erzielt. Diesmal hat sie nach jahrelanger Forschung zu dermatologischen Problemen zahlreiche Wissenschaftler für sich gewinnen können und eine wirksame Entdeckung gegen Nagelpilz gemacht, die Medizinern zuvor nicht gelungen war.</p>
                        <hr className='my-8' />

                        <h1 className='text-2xl text-[#49A2A8] font-bold'>Spezialisten empfehlen</h1>
                        <div className='text-center mt-4'>
                            <img
                                src="https://feleo.net/content/TqCBNIuWxwKnk3Z/images/i75.jpg"
                                alt="Prof. Dominik Hofbauer"
                                className='mx-auto w-32 h-32 object-cover rounded-full shadow-md'
                            />
                            <h2 className='font-bold text-xl sm:text-2xl mt-3'>Prof. Dominik Hofbauer</h2>
                            <h2 className='text-base text-gray-600'>Spezialist für Dermatologie</h2>
                        </div>

                        <div className='mt-6 text-sm sm:text-base'>
                            <p>Menschen, die unter Nagelpilz leiden, hatten bisher kaum eine Chance, das Problem loszuwerden. Einmal infiziert, hatte eine Person selbst nach scheinbarer Heilung lebenslang mit Rückfällen zu kämpfen.</p>
                            <p className='mt-4'>Außerdem müssen bei einer medikamentösen Behandlung über einen längeren Zeitraum Tabletten eingenommen werden. Es ist schon lange bekannt, dass die Einnahme von chemischen Medikamenten die Leber und das Verdauungssystem zerstört, ohne auch nur eine Garantie für die Linderung von Nagelpilz zu bieten. Das gilt auch für Laserbehandlungen, deren Preise horrend hoch sind.</p>
                            <p className='mt-4'>Die Infektionen sind oft gemischt. Wenn Sie also einen Pilz pharmakologisch bekämpfen, wächst der andere doppelt so schnell. Der von Dr. Annika erfundene Fungo Killer ist ein Durchbruch auf diesem Gebiet, denn es ist die erste Methode, die alle 3 Pilzarten gründlich bekämpft: Dermatophyten sowie Hefe- und Schimmelpilze.</p>
                            <p className='mt-4'>Dadurch wird sichergestellt, dass jeder, der ihn verwendet, dauerhaft von Nagelpilz befreit wird. Außerdem ist es eine Behandlung, die 100% natürlich und sicher für den Körper ist, was man von Pillen oder Laser nicht behaupten kann. Und schließlich - die Behandlung von Dr. Annika führt zu beeindruckend schnellen Ergebnissen.</p>
                            <p className='mt-4 font-bold'>Zusammenfassend lässt sich sagen, dass der Fungo Killer bei der Behandlung von Nagelpilz an Händen und Füßen jeglicher Herkunft und jeglichen Schweregrades unübertroffen ist.</p>
                        </div>
                        <hr className='my-8' />

                        <h1 className='text-2xl text-[#49A2A8] font-bold'>Hohe Wirksamkeit, hervorragende Ergebnisse</h1>
                        <p className='mt-4'>Der Fungo-Attentäter von Dr. Annika wurde in 12 Labors weltweit getestet. 70.000 Todesopfer, die an Nagelpilz litten, nahmen an der Testung teil. Alle Untersuchungen haben klar belegt, dass die Versorgung:</p>

                        {/* Benefit List (Responsive Icon/Text Layout) */}
                        <div className='space-y-4 mt-6'>
                            {[
                                "100% der Pilze beseitigt, die Nägel und Haut befallen",
                                "Verhindert, dass Pilze wachsen können",
                                "Die Durchblutung verbessert",
                                "Die Nägel regeneriert",
                                "Das Wachstum von gesunden Nägeln beschleunigt",
                                "Die Nägel vor Schäden und Krankheitserregern schützt"
                            ].map((headline, index) => (
                                <div key={index} className='flex items-start space-x-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-600'>
                                    {/* Using Lucide CheckCircle instead of external SVG for reliability */}
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h1 className='font-bold text-base sm:text-lg'>{headline}</h1>
                                        {/* Repeating original explanatory text for the effect description */}
                                        <p className="text-sm text-gray-700 mt-1">In nur 2 Tagen beginnt es, die Zellen aller 3 Arten von Pilzen zu entfernen, die die Nägel befallen: Dermatophyten, Hefe- und Schimmelpilze.</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className='mt-8'>Dank dieser umfassenden Wirkung beseitigt der Fungo Killer Nagelpilz und damit auch Geruch, Juckreiz und Schmerzen in nur 14 Tagen. Er bekämpft alle Verformungen und Brüchigkeit. Verleiht den Nägeln ein gesundes und ästhetisches Aussehen und eine schöne Farbe.</p>
                        <p className='mt-4'>Die Behandlung befreit Sie ein für alle Mal von den Beschwerden und der Peinlichkeit, die durch Nagelpilz verursacht werden. Um diesen Effekt zu erzielen, müssen Sie nur Ihre Nägel mit dem Fungo Killer lackieren - genau wie mit normalem Nagellack.</p>

                        {/* Call to Action Section (Updated href) */}
                        <div className='mt-10 p-6 bg-red-50 border border-red-300 rounded-xl'>
                            <h1 className='text-2xl font-bold text-red-700'>Zuschüsse für Einwohner unseres Landes</h1>
                            <p className='mt-4'>Wir gratulieren Dr. Annika zu ihrem wissenschaftlichen Erfolg und wünschen ihr viel Glück für ihre weitere Arbeit.</p>
                            <p className='mt-4'>Gleichzeitig stellen wir Ihnen, liebe Leserinnen und Leser, einen Link zu ihrer offiziellen Website zur Verfügung. Dort beschreibt die Ärztin selbst ausführlich die Wirkungen der Behandlung mit dem Fungo Killer. Auf dieser Website können Sie die Behandlung auch mit einem großen Zuschuss bestellen, der bis zum Ende gilt.</p>

                            <div className='flex justify-center mt-6 mb-6'>
                                <img
                                    src="https://feleo.net/content/TqCBNIuWxwKnk3Z/images/product.png"
                                    alt="Fungo Killer Produktflasche"
                                    className='w-32 sm:w-48 h-auto'
                                />
                            </div>

                            {/* Embedded Call to Action (Updated href) */}
                            <div className="text-center">
                                <span className="text-sm font-semibold text-gray-500 line-through mr-3">78€</span>
                                <span className="text-3xl font-extrabold text-red-600">39€</span>
                            </div>
                            <a
                                href="#order-form-section"
                                className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 mt-4 rounded-xl transition duration-300 transform hover:scale-[1.01] shadow-2xl uppercase tracking-wider text-lg"
                            >
                                Jetzt mit Rabatt bestellen (50% Sparen)
                            </a>

                            <p className='font-bold text-center mt-4 text-red-800'>
                                Beeilen Sie sich und bestellen Sie mit Rabatt, bis das Angebot an den nächsten Leser weitergegeben wird!
                            </p>
                        </div>

                        {/* --- NEW ORDER FORM INSERTED HERE --- */}
                        <OrderForm />

                    </div>

                </div>

                {/* RIGHT COLUMN: Sidebar (Hidden on mobile, 1/3 on large screens) */}
                <div className='col-span-1 space-y-8 mt-10 hidden lg:block'>
                    <SidebarRecommendation />
                    <SidebarRecommendation /> {/* Repeat for visual completeness */}

                    {/* Additional Sidebar Mock Content */}
                    <div className="bg-gray-100 p-5 rounded-xl shadow-inner border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                            Lokale Anfragen
                        </h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#order-form-section" className="text-blue-600 hover:text-blue-800">Frage aus Berlin zur Anwendung</a></li>
                            <li><a href="#order-form-section" className="text-blue-600 hover:text-blue-800">Erfahrungen in München</a></li>
                            <li><a href="#order-form-section" className="text-blue-600 hover:text-blue-800">Verfügbarkeit in Apotheken</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* MOBILE ONLY CTA (Optional: to ensure user sees the button on small screens) */}
            <div className='fixed bottom-0 left-0 right-0 p-3 bg-white border-t-4 border-red-600 lg:hidden shadow-2xl z-10'>
                <a
                    href="#order-form-section"
                    className="w-full block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300 uppercase text-sm"
                >
                    JETZT RABATT SICHERN (50% OFF)
                </a>
            </div>

        </div>
    );
};

export default FungoKillerPage;