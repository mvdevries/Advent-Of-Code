using Solutions.Base;

namespace Solutions.Days;

public class Day02: IDay
{
    private IEnumerable<int> seperateInput(string input)
    {
        return input.Trim().Split('\n').Select(e => int.Parse(e.Trim()));
    }

    public int Part1(string input)
    {
        var numbers = seperateInput(input);

        return 0;
    }

    public int Part2(string input)
    {
        var numbers = seperateInput(input);

        return 0;
    }
}
