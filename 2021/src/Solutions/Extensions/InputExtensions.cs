namespace Solutions.Extensions;

public static class InputExtensions
{
    public static IEnumerable<string[]> ToPartsList(this string input)
    {
        return StringToPartsList(input);
    }

    private static IEnumerable<string[]> StringToPartsList(string input)
    {
        return input.Trim().Split('\n').Select(l => l.Trim().Split(' '));
    }

    public static IEnumerable<int> ToNumberList(this string input)
    {
        return StringToNumberList(input);
    }

    private static IEnumerable<int> StringToNumberList(string input)
    {
        return input.Trim().Split('\n').Select(e => int.Parse(e.Trim()));
    }
}
