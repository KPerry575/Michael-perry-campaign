export default function CampaignHomePage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Michael Perry for State Land Commissioner</h1>
        <p className="text-xl">Restore Trust. Protect Resources. Put Land Back to Work.</p>
        <a
          href="https://secure.donationplatform.com/michael-perry" 
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Donate Now
        </a>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Meet Michael</h2>
          <p>
            Michael Perry is a native New Mexican born in Santa Fe and a graduate of New Mexico State University with a bachelor's degree in Wildlife Science. He has spent decades working in wildlife and land management, including over 20 years as a game warden and as Assistant Commissioner of the New Mexico State Land Office. Michael currently serves as Vice Chair County Commissioner for Chaves County and sits on the Public Lands Advisory Committee for the National Association of Counties.
          </p>
          <p>
            In 2012, he founded <em>Wildlife and Habitat Prescriptions</em>, partnering with ranchers to improve land health across southern New Mexico. Michael is a proud husband, father, and outdoor enthusiast who is deeply committed to public access and the responsible use of natural resources.
          </p>
        </div>
        <img 
          src="/images/michael-perry-landscape.jpg" 
          alt="Michael Perry outdoors" 
          className="rounded-2xl shadow-lg w-full" 
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why I'm Running</h2>
        <p>
          As your next State Land Commissioner, I will ensure New Mexico's lands are managed with integrity, transparency, and a commitment to the people who depend on them. From strengthening the oil and gas sector to preserving our agricultural roots and mitigating the devastating impacts of wildfires, I will work to put our land back to work for all New Mexicans.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Priorities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Protect and expand public access to state lands</li>
          <li>Promote responsible oil and gas development to fund education and healthcare</li>
          <li>Support proactive wildfire mitigation and recovery efforts</li>
          <li>Preserve New Mexico’s agricultural legacy through sustainable land use</li>
          <li>Ensure transparency and accountability in land management</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Endorsements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>New Mexico Cattle Growers' Association</li>
          <li>Chaves County Republican Party</li>
          <li>Southern New Mexico Conservation Alliance</li>
          <li>Local ranchers and business owners across the state</li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-600 border-t pt-4">
        &copy; 2025 Michael Perry for State Land Commissioner. All rights reserved.
      </footer>
    </div>
  );
}
