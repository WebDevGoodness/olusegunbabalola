import { Quote } from 'lucide-react';

export function DailyWisdom() {
    // This could come from an API or a larger list in the future
    const dailyVerse = {
        text: "You're familiar with the command to the ancients, 'Do not muder'. I'm telling you that anyone who is so much as angry with a brother or sister is guilty of murder. Carelessly call a brother 'idiot!' and yiu just might find yourself hauled into court. Thoughtlessly yell 'studid!' at a sister and you are on the brink of hellfire.  The simple moral fact is that words kill. 'This is how i want you to conduct yourself in these matters. If you enter your place of worship and, abandon your offering, leave immediately, go to this friend and make things right. Then and only then, come back and work things out with God. 'Or say you're out on the street and an old enemy accosts you. Don't lose a minute. Make the first move; make things right with him. After all, if you leave the first move to him, knowing his track record, you're likely to end up in court, maybe evn in jail. If that happens, you won't get out without a stiff fine.",
        reference: "Matthew 5: 21-26 MSG"
    };

    return (
        <section id="daily-wisdom" className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">WISDOM NUGGET</h2>
                <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                    <div className="absolute top-4 left-4">
                        <Quote className="w-12 h-12 text-blue-100" />
                    </div>
                    <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6 relative z-10 pt-8">
                        "{dailyVerse.text}"
                    </blockquote>
                    <cite className="text-blue-600 font-semibold not-italic text-lg">
                        — {dailyVerse.reference}
                    </cite>
                </div>
            </div>
        </section>
    );
}
