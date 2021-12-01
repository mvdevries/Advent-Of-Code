using Solutions.Base;

namespace Solutions.Days;

public class Day01: IDay
{
    private IEnumerable<int> seperateInput(string input)
    {
        return input.Trim().Split('\n').Select(e => int.Parse(e.Trim()));
    }

    public int Part1(string input)
    {
        var numbers = seperateInput(input);

        int? previousN = null;
        int count = 0;
        foreach (var n in numbers)
        {
            if (n > previousN)
                count++;
            previousN = n;
        }

        return count;
    }

    public int Part2(string input)
    {
        int previous1 = 0;
        int previous2 = 0;
        var numbers = seperateInput(input);
        var groups = numbers
            .Select((n, i) => new {n, i})
            .Aggregate(new List<int>(), (acc, e) =>
            {
                if (previous1 != 0 && previous2 != 0)
                    acc.Add(e.n + previous1 + previous2);
                previous2 = previous1;
                previous1 = e.n;
                return acc;
            });

        int? previousN = null;
        int count = 0;
        foreach (var n in groups)
        {
            if (n > previousN)
                count++;
            previousN = n;
        }

        return count;
    }
}
